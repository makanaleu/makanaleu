---
layout: page
current: clasignature-ind
title: 'Contributing Guide: Git'
navigation: true
logo: 'assets/images/makanal-logo-100.png'
class: page-template
subclass: 'post page'
lang: en
ref: contributing-guide
---

## Topic Branches

To create a topic branch from master, run `git checkout -b My-Contribution master`. See below for branch naming conventions. We also recommend Atlassian's free [SourceTree](https://www.sourcetreeapp.com) app to work with Git.

* Branch names **MUST** use StandardCase, words separated by dashes.
* Branch names **SHOULD** describe the release in few, basic terms.
* Branch names **SHOULD** be prefixed with a common term.

  ```
  Feature-Electronic-Signature
  Fix-Submit-Button-Click-Bug
  Doc-Contributing-Guide
  ```

## Commit Messages

We follow industry standard commit message practice. Please review these principles on the type of information to include in your commit message from [OpenStack](https://wiki.openstack.org/wiki/GitCommitMessages#Information_in_commit_messages).

In addition to these principles, please adhere to the following commit message
template originally written by Tim Pope ([@tpope](https://twitter.com/tpope)):

```
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary.  Wrap it to
about 72 characters or so.  In some contexts, the first
line is treated as the subject of an email and the rest of
the text as the body.  The blank line separating the
summary from the body is critical (unless you omit the body
entirely); tools like rebase can get confused if you run
the two together.

Further paragraphs come after blank lines.

  - Bullet points are okay, too

  - Typically a hyphen or asterisk is used for the bullet,
    preceded by a single space, with blank lines in
    between.
```

To automatically wrap at 72 characters, you can add this to your `.vimrc` file:

```
filetype indent plugin on
```

## Commit Signature

Commit messages **MUST** be signed with the following three lines as shown below:

```
Issue: https://github.com/makanaleu/project/issues/1
Signed-off-by: Contributor Name <contributor@email.com>
CLA: 791dd2fa8a0e64dcb25a1f9df20519b5
```

- Contributor **MUST** Provide the full URL to the related issue on GitHub. GitHub will use this to automatically attach your commit to the issue.
- Contributor **MUST** Provide full name and email address in the format shown above.
- Contributor's name and email address **MUST** match the name and email address used with your [Contributor License Agreement](/contributors/contributor-license-agreement-individuals.html) digital signature.
- CLA **MUST** be included. Use the CLA signature key you received after submitting your [Contributor License Agreement](/contributors/contributor-license-agreement-individuals.html)  digital signature. If you've lost your key, you may resubmit your digital signature to obtain a new key.

All of the above **MUST** be correct on all commits in your pull request or your pull request will be declined.
