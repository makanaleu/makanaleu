---
layout: page
current: clasignature-ind
title: Contributing Guide
navigation: true
logo: 'assets/images/makanal-logo-100.png'
class: page-template
subclass: 'post page'
lang: en
ref: contributing-guide
---

We are always excited when we can make parts of our projects open source and allow contributors to build and work on these components. To make this possible, there are a few things we kindly ask all contributors to understand and follow.

## Projects

Projects open to contributions are maintained at [GitHub](https://github.com/makanaleu). Please be sure to check the open issues before creating new ones. If you're unsure where to get started for a particular component or feature, please visit [#general](https://join.slack.com/t/makanal/shared_invite/enQtMzE2NTEwMjcyNzExLTc1NTFkZWQxYTFlNGYwYjI0MjYwZDVjMDBjZWJlYjk2MjBmODRiMzAyNWY2MzZlN2M1ZjZiMDM0NTQ4MTc1ZTI) on Slack.

## Getting Started

* Check the open issues for the particular project at [GitHub](https://github.com/makanaleu).
* Create an issue if one does not already exist.
* Fork the repository on [GitHub](https://github.com/makanaleu).
* Create a [topic branch](/contributors/guide/git.html#topic-branches) from master (in most cases).
* Review [Contributing Guide: Git](/contributors/guide/git.html).

## Making Changes

* Make [atomic](https://en.wikipedia.org/wiki/Atomic_commit) commits.
* Use [proper formatting](/contributors/guide/git.html#commit-messages) for commit messages.
* Check code coverage output to be sure your changes are covered in testing.
* Add or modify tests as necessary.

## Submitting Changes

* Submit the [Contributor License Agreement](/contributors/contributor-license-agreement-individuals.html) if you have not already
received your CLA signature key. Use the same CLA signature key on all commits, on all Makánal projects.
* Push your topic branch to your fork of the repository at GitHub.
* Submit a pull request to the repository in the [makanaleu](https://github.com/makanaleu) organization.

## Code Review

Our core development team reviews pull requests regularly. If any feedback is necessary before we can merge your contribution, we will expect a reply within two weeks. We reserve the right to decline any pull request, and likely will do so if it becomes inactive.

## Code Reversion

By building and running tests, engaging in open dialogue and subjecting your work to peer review, you are more likely to see your contributions merged to master. Some contributions may be merged directly to master while others are merged into an array of testing pipelines.

If your contribution causes failures in one or more testing pipeline, we will attempt to correct the error. If a fix can not be determined and committed within one business day of its discovery, we may revert the commit(s) responsible. You will be notified of the revert by email, and the details of the test(s) and failure(s) will be documented on the corresponding issue at GitHub. You will need to use this information to build additional and/or modify existing tests to ensure the issue has been resolved before submitting a new pull request.
