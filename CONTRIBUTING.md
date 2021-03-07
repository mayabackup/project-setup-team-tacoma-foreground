# Guide to Contributing

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

# Team values

How the team will work together: We will communicate using the slack team channel, slack DMs and Zoom meetings for daily standups etc.

How members who need help will solicit it from the others: We will bring up during daily standup or message the group in the team slack channel (alternatively: DM specific team members)

How we'll reach consensus when there are disagreements on direction: We will bring them up during daily standups or we will message the group in the team slack channel/DM, then do as the tyranny of the majority demands of us. Alternatively, consult Prof. Bloomberg or TAs.

What to do when a member is failing to deliver on their obligations to the team: We will try to speak to the person directly (DM), then report to scrum master if that method doesn't prove itself to be successful. Alternatively, if all else fails, we will report to Prof. Bllomberg.

How quickly team members are expected to respond to messages directed at them: Upon 24 hours of receving said message.

# Daily standups

What days/times will standups occur and how long do they last: Mondays (4:45-5:00) + Wednesdays (4:45-5:00) + Sundays (2:00-2:15).

Members expected to be present synchronously: Yes!

Agreement that members will not cover for other members who do not participate: Yes - but do let others know as early as possible, if one can not attend due to unforseeable circumstances.

Agreement that a member who makes no progress on a task for two standups or more in a row will be reported to management: Scrum master (or developer, if scrum master does not make satisfactory progress) will report to the professor.

# Coding standards

Designate a code editor and code linter all team members will use to standardize code formatting: VS code (tbd: + ESLint).

A page I took straight out of Prof. Bloomberg's playbook, which indeed reflects our team's personality and values:

Bloomberg Philosophy #1: Don't over-engineer. Write minimum code to get things working end to end, only then iterate to improve. - Code for each task and spike must be peer-reviewed and pass tests before merging into the main branch of code.

Bloomberg Philosophy #2: Always push working code, if you break the pipeline/build then fix it.

Bloomberg Philosophy #3: Make granular and small commits, per feature or per bug fix.
ALSO: Provide descriptive commit messages.

Bloomberg Philosophy #4: Write self documenting code. Use descriptive variable and function names. Avoid unnecessary name shortening.

Bloomberg Philosophy #5: Don't leave dead/commented out code behind. If you see such code, delete it.

Bloomberg Philosophy #6: Write automated tests to cover critical integration points and functionality.
