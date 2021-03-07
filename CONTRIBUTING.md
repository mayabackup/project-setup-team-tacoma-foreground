# Guide to Contributing
Delete the contents of this file and replace with the contents of a proper guide to contributing to this project, as described in the [instructions](./instructions.md)


Each team must collaboratively draft a [CONTRIBUTING.md](./CONTRIBUTING.md) - a Markdown document exclusively dedicated to how others can contribute to this project.  This document is essentially a contract agreed-upon by all developers and contributors, and includes at a minimum:
- the project's values and team norms, including the definition of "done"

## Project values and team norms

### Definition of 'done':
- Acceptance criteria met (for a user story).<br>
- Code/feature is peer reviewed. <br>
- Code/feature is proofread. <br>
- Code is deployed to the test branch and runs successfully with the existing codebase (new feature doesn not compromise the existing functionality unless it is intended to do so). <br>
- Code/feature passes testing if there are any testing requirements specified. <br>
- Product Owner accepts the changes. <br>

### the Git workflow that the team follows
- a detailed description of the rules of contributing and any considerations or how and what to contribute
- Create a branch when working on a task/spike - do not work on a master branch unless it's a .md file 
- When creating a pull request from a branch, mention issue number of the task/spike in the commit message
- Always pull from master before pushing


1. Never work on ``master``
2. Pulling ``master`` should never create a merge commit
3. Tests are run after ``pull`` and before ``commit``
3. Describe _Features_ in _Issues_
4. Work on _Issue Specific Feature Branches_
5. Regularly ``git rebase origin/master`` _Feature Branches_ to updated ``master``
6. _Interactive Rebase_ before _Creating Pull Request_
7. _Peer Review Pull Request_
8. _Delete Feature Branch_ after _Pull Request Approval_

### the Git workflow that the team follows

- how disagreements or conflicts among team members will be resolved
- instructions for setting up the local development environment in order to work on this project
- instructions for building and testing the project (update with that information once the project reaches that stage)

This documents allows potential contributors, whether in the open source community or in a private organization, to see the project's rules and processes for contributions. It should be well-formatted with clear headings and subheadings.  

GitHub provides a link to this document automatically to any user who creates a Pull Request on this project.
