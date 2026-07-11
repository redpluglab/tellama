# Security policy

## Reporting a vulnerability

Do not open a public issue for vulnerabilities, leaked credentials, authentication bypasses, signing concerns, or unintended network exposure.

Use GitHub's private vulnerability reporting for this repository when available, or contact `challychoi@gmail.com` with the subject `Tellama security report`. Include the affected version, device and Android version, reproduction steps, and impact. Remove API keys, personal prompts, model files, and unrelated logs.

We will acknowledge a valid report, investigate privately, and coordinate disclosure after a fix is available. We do not promise a bounty program.

## Supported versions

Security fixes target the latest Tellama release. Users should update through Tellama's in-app Update Center or the latest GitHub release.

## Safe deployment

- Use Wi-Fi LAN mode only on a trusted private network.
- Keep Bearer keys private and revoke keys that may have been copied or logged.
- Do not expose port `11434` to the public internet.
- Stop the server when it is not needed.
