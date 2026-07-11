# Contributing

Tellama welcomes contributions to the public SDK, API examples, compatibility tests, and documentation in this repository. The commercial Android application and native runtime are developed in a private repository and are not part of the public contribution surface.

## Good contributions

- Reproducible API compatibility tests
- Python or JavaScript client reliability improvements
- Examples for agents and desktop tools
- Documentation corrections and translations
- Device and model observations that do not include private user data

## Pull requests

1. Open an issue for substantial behavior or API changes.
2. Keep changes inside the public scope; do not submit decompiled application code or proprietary assets.
3. Add or update a contract test when client behavior changes.
4. Run `sdk/tests/run.sh` before opening the pull request.
5. Never include API keys, prompts, local paths, model files, or personal data.

By contributing files under `sdk/`, you agree that your contribution is licensed under Apache-2.0. Documentation contributions are accepted for use in the Tellama public project.
