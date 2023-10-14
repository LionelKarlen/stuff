<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/services/pb';

	let username: string;
	let password: string;
	let confirmPassword: string;

	let isLogin: boolean = true;

	async function handleSubmit() {
		if (isLogin) {
			await pb.collection('users').authWithPassword(username, password);
		} else {
			const tmpUser = {
				username: username,
				password: password,
				passwordConfirm: confirmPassword
			};
			await pb.collection('users').create(tmpUser);
		}
		goto('/');
	}
</script>

<div class="h-screen w-full md:w-3/4 flex justify-center items-center">
	<form class="flex flex-col gap-4 w-full" on:submit|preventDefault={handleSubmit}>
		<div class="flex flex-row items-baseline justify-between w-full">
			<h2 class="text-2xl font-bold">{isLogin ? 'Login' : 'Register'}</h2>
			<button
				class="btn-link cursor-pointer"
				on:click={() => {
					isLogin = !isLogin;
				}}>{isLogin ? 'Register' : 'Login'} instead</button
			>
		</div>
		<div>
			<span class="text-upper">Username</span>
			<input
				type="text"
				placeholder="Username"
				class="input input-bordered w-full"
				bind:value={username}
			/>
		</div>
		<div>
			<span class="">Password</span>
			<input
				type="password"
				placeholder="Password"
				class="input input-bordered w-full"
				bind:value={password}
			/>
		</div>
		{#if !isLogin}
			<div>
				<span class="">Confirm Password</span>
				<input
					type="password"
					placeholder="Password"
					class="input input-bordered w-full"
					bind:value={confirmPassword}
				/>
			</div>
		{/if}
		<button class="btn mt-3 bg-gradient-to-r from-primary to-secondary" on:click={handleSubmit}
			>{isLogin ? 'Login' : 'Register'}</button
		>
	</form>
</div>
