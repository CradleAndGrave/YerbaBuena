### Git Branch Names
Name branches like `feature/database`, or `bug/bobby-tables`.

Follow the rebase-centered git workflow, except for major branches, we'll merge instead of rebase.

Start new branch:
- `git pull --rebase upstream master`
- `git checkout -b feature/database`

If it's just your branch, rebase, push, merge.

Suppose we push `feature/database` as a branch, and two people work on it for two days. Now it's a major branch.

Start new branch. From the `feature/database` branch:

- `git checkout -b bug/bobby-tables`

Again, rebase every time, push to the feature/database branch, merge.
- `git pull --rebase feature/database master`

Finally, we merge feature/database into master.
- `git merge feature/database`

### Create new features

Create a Github issue with a user story. Dev team agrees on points during standup.

Product owner will assign priority to task.

### Communication
We communicate in Slack, with standups via Google Hangout if remote.

We use Waffle.io, which adds Slack notifications, opens and closes issues, assigns devs, and allows GitHub comments.

Most product communication occurs in GitHub issue comments, or in our Slack channel.

- During the day, we create issues with user stories to suggest features.
- In the afternoon standup, we assign points/complexity to the tasks.
- Product owner assigns priorities to the tasks.
- In the morning standup, we move tasks to the ready board to add them to the current sprint.
- As assigned and checked out, we move tasks to the in progress board.

(Be sure to mention the issue number in your commit message, so that Waffle.io moves the associated issue)
