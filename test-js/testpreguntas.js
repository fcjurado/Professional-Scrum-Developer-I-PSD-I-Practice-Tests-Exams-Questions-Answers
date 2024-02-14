const markdownContent = `
### When can Product Backlog Refinement occur?

- [ ] Only during Sprint Planning.
- [x] Anytime during the Sprint.
- [ ] Only during Refinement meetings planned by the Product Owner.
- [ ] Before Sprint Planning.

**[⬆ Back to Top](#table-of-contents)**

### What would NOT be considered Refactoring?

- [ ] Reordering method parameters to improve readability.
- [ ] Extracting interfaces.
- [ ] Renaming things to be more logical.
- [x] Changing external interfaces or APIS.
- [ ] Extracting methods.

**[⬆ Back to Top](#table-of-contents)**

### Your Scrum Team is one of seven teams working on a Software Product. All teams use the same Version Control System. Which is the best approach to deliver a high-quality Increment?

- [ ] Developers should perform a combination of local and private builds.
- [ ] Each team's automated build is integrated toward the end of the Sprint.
- [x] There is one automated and integrated build for all seven teams.
- [ ] Each team should have its own automated build.

**[⬆ Back to Top](#table-of-contents)**

### Who creates documentation included with an Increment?

- [x] The Developers.
- [ ] Increments do not need documentation.
- [ ] The Product Owner.
- [ ] Technical Writers.
- [ ] The Scrum Master.

**[⬆ Back to Top](#table-of-contents)**

### What is a merge in a Version Control System?

- [ ] Copying a portion of a code base to isolate it from the original codebase.
- [ ] Identifying a particular codebase as ready for distribution.
- [ ] Triggering a Deployment into Production.
- [x] Combining two or more versions of code into a single codebase.

**[⬆ Back to Top](#table-of-contents)**

### Which three of the following are feedback loops in Scrum?

- [x] Daily Scrum.
- [ ] Release Planning.
- [x] Sprint Review.
- [ ] Refinement Meeting.
- [x] Sprint Retrospective.

**[⬆ Back to Top](#table-of-contents)**

### Which four types of tests can be included in an automated test harness?

- [x] Performance.
- [ ] Exploratory.
- [x] Unit.
- [x] Functional.
- [ ] Manual regression.
- [x] Integration.

**[⬆ Back to Top](#table-of-contents)**

### Which concept is described by the Last Responsible Moment?

- [ ] Making decisions as soon as possible to close feedback loops as soon as possible.
- [x] Discover decisions to be made as soon as possible but postpone deciding to the latest reasonable moment.
- [ ] The last moment in a Sprint when code changes are allowed, after this only stabilization work should be conducted.
- [ ] Opening a learning window to validate hypotheses and create learning.
- [ ] The last moment a Developer is responsible for quality, after this the Tester is responsible.

**[⬆ Back to Top](#table-of-contents)**

### Choose four desirable characteristics of a Unit Test.

- [ ] Includes exercising the persistence layer.
- [x] Makes assertions about only one logical concept.
- [x] Independent of others.
- [x] Test code is as small as possible.
- [x] Execution is fast.

**[⬆ Back to Top](#table-of-contents)**

### Why does a test written using TDD (Test Driven Development) initially fail?

- [ ] Because the test has not been refactored.
- [ ] Because it has to be put into an automated test harness to be run.
- [ ] Because the tests are checked in before the Product code exists.
- [x] Because the Product code to satisfy the test does not yet exist.

**[⬆ Back to Top](#table-of-contents)**

### When do the Developers show their work to the Product Owner?

- [ ] Whenever the Product Owner asks.
- [ ] During the Sprint Review.
- [ ] Anytime the Developers need feedback from the Product Owner.
- [x] All of the above.

**[⬆ Back to Top](#table-of-contents)**

### What are possible benefits from practicing Test Driven Development (TDD)?

- [ ] It is a great way for Testers to contribute early in the Sprint as they can start creating all the tests from the beginning on.
- [ ] It makes Integration Tests obsolete and by doing so saves a lot of time.
- [x] It helps break down complex problems into smaller ones that are much easier to be tackled.
- [ ] It increases collaboration between Developers as it requires Pair Programming.
- [x] It might lead to better code as Refactoring is part of the TDD cycle.
- [x] It helps to identify gaps in understanding the desired behavior.

**[⬆ Back to Top](#table-of-contents)**

### Who decides the System Architecture of a Product developed using Scrum?

- [ ] The Architect chosen by the Scrum Team.
- [ ] The Software Architect assigned to the Scrum Team.
- [x] The Developers with input from the Scrum Team and others.
- [ ] The Chief Architect.

**[⬆ Back to Top](#table-of-contents)**

### When using Continuous Integration, how often should the build be executed?

- [ ] Once per hour.
- [x] Whenever new or changed code is checked into version control.
- [ ] Once per day.
- [ ] Before the end of the Sprint.
- [ ] Whenever new tests are created or uncertainty arises about whether old tests will pass.

**[⬆ Back to Top](#table-of-contents)**

### Which of the following are advantages of Continuous Integration?

- [ ] Readability of code is improved.
- [x] Know immediately how a change affected the Product.
- [ ] The feature-branch is generally kept in a buildable state.
- [x] Reduce effort and risk when integrating changes.

**[⬆ Back to Top](#table-of-contents)**

### Who determines how work is performed during the Sprint?

- [ ] The Scrum Master.
- [ ] The Scrum Team.
- [ ] Team Manager.
- [ ] Subject matter experts.
- [x] The Developers.

**[⬆ Back to Top](#table-of-contents)**

### Who creates tests on a Scrum Team?

- [ ] The Product Owner.
- [x] The Developers.
- [ ] Quality Assurance Specialists.
- [ ] The Scrum Master.

**[⬆ Back to Top](#table-of-contents)**

### What is Test First Development (TFD)?

- [x] Creating tests before satisfying them.
- [ ] Testing existing code before adding more code to it.
- [ ] Having the Tester in the Scrum Team write the test plans before coding.
- [ ] The continuous restructuring of Software to retain flexibility.

**[⬆ Back to Top](#table-of-contents)**

### Which is the most reliable form of technical documentation?

- [ ] A spreadsheet of passing manual tests.
- [ ] The Developer's whiteboard.
- [ ] UML model.
- [ ] Release notes.
- [ ] A help file.
- [x] A passing test harness with clear naming and vocabulary.

**[⬆ Back to Top](#table-of-contents)**

### While developing new functionality, you find a bug that has already been delivered to the customer. What do you do?

- [ ] Revise the tests so that the bug no longer appears on the bug report.
- [ ] Fix the bug.
- [x] Talk to the Product Owner.
- [ ] Stub out the code that caused the bug so it no longer occurs.

**[⬆ Back to Top](#table-of-contents)**

### Who has the final decision about the order of items in the Product Backlog?

- [ ] The Scrum Master.
- [ ] The Stakeholders.
- [ ] The Scrum Team.
- [ ] The Developers.
- [x] The Product Owner.

**[⬆ Back to Top](#table-of-contents)**

### What are two differences between Unit Tests and Integration Tests?

- [x] A Unit Test isolates a specific system behavior.
- [x] An Integration Test usually focuses on the integration of two or more units.
- [ ] A Unit Test is automated.
- [ ] An Integration Test runs overnight.
- [ ] A Unit Test only runs on a Developer's workstation.

**[⬆ Back to Top](#table-of-contents)**

### How much time must a Product Owner spend with the Developers?

- [ ] 100%.
- [ ] Enough so that the Product Owner is not surprised by the value delivered by the Increment.
- [ ] 40%, or more if the Stakeholders agree.
- [x] Any amount of time the Developers ask the Product Owner to be present.

**[⬆ Back to Top](#table-of-contents)**

### What are the typical roles when practicing Pair Programming?

- [ ] Product Owner and Developer.
- [ ] Business Analyst and Developer.
- [ ] Tester and Developer.
- [x] Driver and Navigator.
- [ ] Frontend and Backend.

**[⬆ Back to Top](#table-of-contents)**

### True or False: When multiple teams work together on the same Product, each team should maintain a separate Product Backlog.

- [ ] True.
- [x] False.

**[⬆ Back to Top](#table-of-contents)**

### What are three of the best ways to address non-functional requirements?

- [ ] Scrum is for functional, front-end development only.
- [x] Important, recurring non-functional requirements can be added to the Definition of Done.
- [ ] Discuss them during a risk mitigation phase before development.
- [x] Include them in the Product Backlog.
- [x] Specific expectations can be used as Acceptance Criteria to specific Product Backlog Items.
- [ ] Before the release, they should be tested and validated in a hardening Sprint.

**[⬆ Back to Top](#table-of-contents)**

### What is the primary purpose of Refactoring?

- [ ] Ensuring that all factors are constantly aligned.
- [ ] Removing all bugs that were found during Regression Tests.
- [x] Making sure that the code is readable and maintainable.
- [ ] Creating better technical documentation.

**[⬆ Back to Top](#table-of-contents)**

### Which are four attributes of a good bug report?

- [x] Expected results and observed results.
- [x] Includes build or version number where bug was found.
- [ ] Includes code for a proposed fix.
- [x] Provides simple and repeatable reproduction steps.
- [x] Screenshots or other pictures of the bug in action.
- [ ] Explains some new system functionality desired.

**[⬆ Back to Top](#table-of-contents)**

### The practice of decomposing a requirement into failing tests is called:

- [ ] Regression Testing.
- [ ] Object oriented requirements definition.
- [x] Acceptance Test Driven Development.
- [ ] Behavior Driven Development.

**[⬆ Back to Top](#table-of-contents)**

### What is a mock object?

- [x] A test object that mimics the behavior of a dependency in the system under test.
- [ ] A mock helps you create a build script.
- [ ] Mocks, stubs, dummies, fakes, and shims are all the same.
- [ ] A mock is a way to initialize the database for testing.

**[⬆ Back to Top](#table-of-contents)**

### Which four are benefits of Test Driven Development?

- [x] It improves quality and reduces bugs.
- [x] It reduces the cost of maintenance over time.
- [x] It promotes good design and separation of concerns.
- [ ] It ensures no defects are present in the code.
- [x] It causes you to construct a test harness that can be automated.

**[⬆ Back to Top](#table-of-contents)**

### Which are three attributes of a bad bug report?

- [x] Vague statements or untested assumptions.
- [x] Generic titles.
- [ ] Simple and repeatable reproduction steps.
- [x] Assigning blame.
- [ ] One bug per report.

**[⬆ Back to Top](#table-of-contents)**

### When using Scrum, can a Scrum Team use Continuous Delivery?

- [x] Yes, there is nothing in Scrum that conflicts with Continuous Delivery.
- [ ] No, because the Product Owner may not be available each time a PBI is done and the Product Owner has to decide if it should be released.
- [ ] No, because the increment has to be approved at the Sprint Review before it can be released, and a 2-week Sprint would not be considered continuous.
- [ ] No, because Stakeholders may have already seen the new features and the Sprint Review will be meaningless.
- [ ] No, because before releasing an Increment it first has to fulfill the Definition of Done.

**[⬆ Back to Top](#table-of-contents)**

### You are asked to refactor part of the codebase for Application X. When you are done, all Unit Tests pass with 50% Code Coverage. What can you infer from this?

- [ ] At least 50% of Application X functions correctly.
- [ ] At most 50% of Application X functions correctly.
- [ ] There are no bugs present in Application X.
- [x] You did not break any existing Unit Tests.

**[⬆ Back to Top](#table-of-contents)**

### What are two ways that regulatory compliance issues are dealt with in Scrum?

- [ ] They are addressed by a separate team who is responsible for compliance issues.
- [x] They are addressed along with functional development of the Product.
- [ ] They are discussed, determined, and documented before the actual feature development Sprints.
- [x] They are added to the Product Backlog and addressed in early Sprints, while always requiring at least some business functionality. no matter how small.

**[⬆ Back to Top](#table-of-contents)**

### True or False: User Stories are required in the Product Backlog.

- [ ] True.
- [x] False.

**[⬆ Back to Top](#table-of-contents)**

### In Software Development, DRY refers to:

- [ ] Code with low Cyclomatic Complexity.
- [x] Code with minimal duplication.
- [ ] Code that has not been peer reviewed.
- [ ] Code that has been peer reviewed.

**[⬆ Back to Top](#table-of-contents)**

### Which statements are true when multiple Scrum Teams work on a Software Product at the same time?

- [ ] All Scrum Teams work in their own version control branch.
- [ ] Code is merged at the Scrum of Scrums.
- [x] The Scrum Teams must integrate their work before the end of the Sprint.
- [x] The Scrum Teams coordinate their work to deliver a single Increment.
- [ ] Each Scrum Team should have a different Product Owner.

**[⬆ Back to Top](#table-of-contents)**

### Which answer best describes Behavior Driven Development (BDD)?

- [x] A style of Test Driven Development focusing on user and system interactions.
- [ ] A development style that accounts for leadership style among team members.
- [ ] A way to organize Unit Tests based on class and method structures.
- [ ] A technique for maintaining Regression Test harnesses.

**[⬆ Back to Top](#table-of-contents)**

### In what ways do Developers contribute to refining the Product Backlog?

- [x] They ask questions in order to clarify the intent of Product Backlog Items.
- [ ] They do not. The Developers are only responsible for prioritizing technical work.
- [ ] They do not. The Scrum Master and the Product Owner are responsible for Product Backlog Refinement.
- [x] They give input on technical dependencies.
- [x] They may update estimates for Product Backlog Items.

**[⬆ Back to Top](#table-of-contents)**

### When should the Developers create their first automated build?

- [ ] Just before the Product is released.
- [ ] Before writing the first line of code.
- [ ] When the Product Owner asks for a build.
- [ ] Just before the end of the Sprint.
- [x] As soon as there is code in the Version Control System.

**[⬆ Back to Top](#table-of-contents)**

### Which types of tests can be automated?

- [ ] Exploratory.
- [x] Performance.
- [x] Unit.
- [x] Smoke.
- [x] Functional.
- [x] Integration.

**[⬆ Back to Top](#table-of-contents)**

### How much work is required of the Developers to complete a Product Backlog Item selected during the Sprint Planning?

- [ ] A proportional amount of time on analysis, design, development, and testing.
- [ ] All development work and at least some testing.
- [ ] As much as they can fit into the Sprint, with remaining work deferred to the next Sprint.
- [x] As much as s required to meet the Scrum Team's Definition of Done.

**[⬆ Back to Top](#table-of-contents)**

### Why might Developers choose to do Pair Programming?

- [ ] Information sharing and learning.
- [ ] Improving Code Quality.
- [ ] Efficiency.
- [ ] It can be a fun way to work.
- [x] All of the above.

**[⬆ Back to Top](#table-of-contents)**

### What is the role of Modeling in Scrum Teams?

- [ ] Models are not used by agile teams.
- [ ] Models are maintained along with the Software as it emerges.
- [ ] Models are assembly instructions for the Developers.
- [x] Modeling may be useful to increase shared understanding.

**[⬆ Back to Top](#table-of-contents)**

### Which of the following are DevOps Practices?

- [ ] Continuous Integration / Continuous Deployment / Continuous Delivery.
- [ ] Blue-Green Deployment.
- [ ] Hypothesis Driven Development.
- [ ] Vertical Teams.
- [ ] Blameless Postmortem.
- [x] All of the above.

**[⬆ Back to Top](#table-of-contents)**

### While practicing Test Driven Development, what is done after the test fails?

- [x] Write the minimum amount of Product code to satisfy the test.
- [ ] Refactor the test so the code passes.
- [ ] Run it again to make sure it really fails.
- [ ] Implement the required functionality.
- [ ] Meet with the Business Analyst to ensure that the test is correct.

**[⬆ Back to Top](#table-of-contents)**

### What tactic should a Scrum Master use to divide a group of 100 people into multiple Scrum Teams?

- [ ] Create teams based on their skills across multiple layers (such as database, Ul, etc.).
- [x] Ask the people to divide themselves into teams.
- [ ] Ask the Product Owner to assign the people to teams.

**[⬆ Back to Top](#table-of-contents)**

### Developers are blocked by an impediment in the middle of the Sprint. The impediment is outside the Developer's control. What should they do?

- [ ] Stop using Scrum until the impediment is resolved.
- [ ] Complete the work that can be done and complete the remainder during the hardening Sprint.
- [x] Immediately raise the issue to the Scrum Master.
- [ ] Cancel the Sprint.
- [ ] Drop the Product Backlog Items affected by the impediment from the Sprint Plan.

**[⬆ Back to Top](#table-of-contents)**

### What is an Integration Test?

- [ ] A test of the user interface.
- [ ] A test runs during a Continuous Integration build.
- [ ] A test of a single unit of functionality.
- [x] A test of multiple units of functionality.

**[⬆ Back to Top](#table-of-contents)**

### Which of the following describes the focus of the first way of DevOps?

- [ ] The first set of practices a team should apply before moving to the second way.
- [x] Using automated build and release pipelines.
- [ ] To deliver value earlier and more frequently.
- [ ] A tool-focused way of introducing DevOps, compared to a mindset way (second way) and organizational structure (third way).
- [ ] A culture of continuous experimentation and learning.

**[⬆ Back to Top](#table-of-contents)**

### Which of the following is true about the Definition of Done?

- [x] It might be a subject of discussion during Sprint Retrospective.
- [ ] It is the sole responsibility of the Developers to define it.
- [ ] It is synonymous with Acceptance Criteria.
- [ ] It can only be extended; nothing can be removed.
- [x] It defines a state when the entire Increment is releasable.

**[⬆ Back to Top](#table-of-contents)**

### At Sprint Planning, the Scrum Team has NO clear standard to meet for releasable Software. What should the Scrum Team do?

- [ ] Ask the Product Owner to specify a Definition of Done.
- [ ] Create a unique completion checklist for each item in the Sprint.
- [x] Specify a shared Definition of Done.
- [ ] Ask the Scrum Master what they should do.

**[⬆ Back to Top](#table-of-contents)**

### Based on "Sprint 7 Burndown Chart" would you do anything different in Sprint 8?

![Burndown](images/burndown.jpg)

- [ ] The Scrum Master adds additional Developers for Sprint 8.
- [ ] The Developers carry over incomplete Sprint Backlog items from Sprint 7 to Sprint 8 and monitor the Sprint 8 burn-down chart. As soon as deviation from trends is detected, the Developers work with the Product Owner to negotiate remaining work.
- [ ] There is nothing wrong The Developers will present all Product Backlog Items selected for Sprint 7 at the end of the Sprint.
- [x] The Developers may forecast less overall work in Sprint 8.
- [ ] Stakeholders will encourage the Scrum Team to estimate better during the Sprint 8 Planning Meeting.
- [x] The Developers put incomplete Product Backlog Items back into the Product Backlog for re-ordering.
- [ ] The Product Owner may ask the Developers to complete the unfinished Product Backlog Items from Sprint 7 in Sprint 8.

**[⬆ Back to Top](#table-of-contents)**

### True or False: Database design must be complete before coding starts to ensure a solid foundation?

- [ ] True.
- [x] False.

**[⬆ Back to Top](#table-of-contents)**

### The Daily Scrum event happens every day. What would be three concerns if the frequency were to be lowered to every two to three days?

- [x] Opportunities to inspect and adapt in the Sprint Backlog are lost.
- [ ] The Scrum Master loses the ability to update the Gantt Chart properly.
- [ ] Too much work is spent updating the Scrum Board before meeting.
- [x] Sprint Plan may become inaccurate.
- [x] Impediments are raised and resolved more slowly.
- [ ] The Product Owner cannot accurately report to the Stakeholders.

**[⬆ Back to Top](#table-of-contents)**

### Which of the following are required by Scrum? (choose all of those who apply)

- [ ] Release Burnup Chart.
- [ ] Burndown Chart.
- [ ] Unit Tests.
- [ ] Critical Path Analysis.
- [ ] Refactoring.
- [ ] Build automation.
- [x] None of the above.

**[⬆ Back to Top](#table-of-contents)**

### Who is responsible for creation of the Definition of Done?

- [ ] The Scrum Master.
- [x] The Scrum Team.
- [ ] The Development Team.
- [ ] The Product Owner.

**[⬆ Back to Top](#table-of-contents)**

### Pair Programming is implemented by?

- [ ] Frontend and Backend Developers.
- [ ] Tester and Developer.
- [ ] Developer and Scrum Master.
- [x] Two persons working on the same PBI.

**[⬆ Back to Top](#table-of-contents)**

### Which of the following best describes Emergent Architecture?

- [ ] Starting development of a Software Product requires a clear understanding of the underlying Software Architecture and Emergent Architecture describes the process of creating this initial architecture.
- [ ] The Software Architecture emerges solely decisions the Developers make from a technical perspective.
- [ ] In Scrum there is no Architecture-Role therefore architecture emerges naturally.
- [x] The desire to make decisions easier to change in the future and find the best possible point in time to make decisions.
- [ ] Enterprise Architects must be involved to create the foundation of each Software Product.

**[⬆ Back to Top](#table-of-contents)**

### Which are two benefits of establishing naming conventions for code? (choose best two answers)

- [ ] To make it easy to distinguish between different Software Products.
- [x] To make the code more readable.
- [ ] To communicate the identity of the Developer who worked on the code.
- [x] To reduce friction in a shared codebase.
- [ ] To ensure that abandoned functions are not created.

**[⬆ Back to Top](#table-of-contents)**

### Does delivering changes frequently and directly into Production help to reduce risk? (choose two)

- [x] Yes, because the changes you make are much smaller and it is easier to fix problems.
- [ ] No, because each release means a risk to break something so releasing more frequently would increase the risk.
- [ ] Yes, because frequent release encourage the Developers to automate the release process.
- [x] Yes, because you get earlier feedback and can learn faster.
- [ ] No, the only way to tackle these risks is by extensive risk management.
- [ ] No, because releasing needs extensive testing which cannot be conducted frequently.

**[⬆ Back to Top](#table-of-contents)**

### True or False: Best Practices are recommended to solve complex problems.

- [ ] True.
- [x] False.

**[⬆ Back to Top](#table-of-contents)**

### When is Performance Testing most effectively performed?

- [x] Often, throughout development of the Software.
- [ ] Just before deploying to Production.
- [ ] After coding is complete.
- [ ] In Production.

**[⬆ Back to Top](#table-of-contents)**

### Which three of the following criteria are most helpful as part of a Scrum Team's Definition of Done? (choose best three answers)

- [ ] The Product is released at the end of every Sprint.
- [x] Acceptance Tests pass.
- [x] Code Review is done.
- [x] Regression Tests pass.
- [ ] No impediments exist.

**[⬆ Back to Top](#table-of-contents)**

### A team has expressed requirements as a set of failing Acceptance Tests. What are two benefits? (choose best two answers)

- [x] Improves quality in the requirement itself.
- [x] Clear Acceptance Criteria for each feature.
- [ ] Using a code generation tool, the solution can be generated from the requirements model.
- [ ] Promotes the use of DRY principle.
- [ ] Tracking of competencies.

**[⬆ Back to Top](#table-of-contents)**

### Which is LEAST useful when measuring Code Maintainability?

- [x] Function Points.
- [ ] Cyclomatic Complexity.
- [ ] Depth of Inheritance.

**[⬆ Back to Top](#table-of-contents)**

### Which two criteria are useful in deciding if something should be documented every Sprint? (choose best two answers)

- [ ] The Scrum Master requires it.
- [x] It is required by the Definition of Done.
- [x] The documentation is used to enhance and maintain the Software.
- [ ] The Software tool being used requires it.
- [ ] It has always been documented in the past.

**[⬆ Back to Top](#table-of-contents)**

### What factor should be considered when establishing the Sprint length?

- [x] The need of the team to learn on doing work and measuring results.
- [ ] The frequency at which team formation can be changed.
- [ ] The organization release schedule.
- [ ] The organization has mandated similar length Sprints.

**[⬆ Back to Top](#table-of-contents)**

### What are some disadvantages of Code Coverages as a measurement for how well a system or Product is tested? (choose best three answers)

- [ ] It only provides insights for programmers.
- [x] It does not ensure that the most important or highest risk areas of the code are being exercised by the tests.
- [x] It could create incentives to write tests that simply increase Code Coverage, rather than tests that find bugs without increasing coverage.
- [ ] It is too complicated to explain to Management.
- [x] Developers could stop adding more valuable tests once the target coverage is achieved.

**[⬆ Back to Top](#table-of-contents)**

### Which of the following are quality goals in Application Architecture? (choose best two answers)

- [ ] Build.
- [x] Security.
- [ ] Design Pattern selection.
- [x] Scalability.

**[⬆ Back to Top](#table-of-contents)**

### True or False: Stakeholders can be included in Product Backlog Refinement?

- [x] True.
- [ ] False.

**[⬆ Back to Top](#table-of-contents)**

### What are two good ways for the Development Team to make a non-functional requirements visible?

- [ ] Put them on a separate list on the Scrum board, available for all to see.
- [x] Add them to the Product Backlog and keep the Product Owner posted on the expected effort.
- [ ] Run the Integration and Regression Tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint.
- [x] Add them to the Definition of Done so the work is taken care of every Sprint.

**[⬆ Back to Top](#table-of-contents)**

### What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint? (choose the best answer)

- [x] There are no such activities. The next Sprint starts immediately after the current Sprint.
- [ ] Work with the Quality Assurance departments on the Increment of the current Sprint.
- [ ] Refine the Product Backlog.
- [ ] Update the project plan with Stakeholders.

**[⬆ Back to Top](#table-of-contents)**

### You are the Scrum Master on a newly formed Scrum Team. Which two of the following activities would probably help the team in starting up? (choose the best two answers)

- [ ] Ensure the Scrum Team members have compatible personalities.
- [ ] Introduce a bonus system for the top performers in the team.
- [x] Ensure the team understands they need a Definition of Done.
- [ ] Have the development managers for each Development Team member introduce their direct reports and go over their responsibilities on the Scrum Team.
- [x] Ask the Product Owner to discuss the Product, its vision, history, goals, and context, as well as answer questions.

**[⬆ Back to Top](#table-of-contents)**

### Which best describes the Product Backlog? (choose the best answer)

- [ ] It contains all foreseeable tasks and requirements from which the Scrum team can develop and maintain a complete project plan.
- [x] It is allowed to grow and change as more is learned about the Product and its customers.
- [ ] It is baselined to follow change management processes.
- [ ] It provides just enough information to enable a Scrum team to start the design phase of a Product.

**[⬆ Back to Top](#table-of-contents)**

### What are two responsibilities of Testers in a Development Team? (choose the best two answers)

- [ ] Verifying the work of programmers.
- [x] Scrum has no "Tester" role.
- [ ] Finding bugs.
- [x] Everyone in the Development Team is responsible for quality.
- [ ] Tracking quality metrics.

**[⬆ Back to Top](#table-of-contents)**

### How do you know that a Development Team is cross-functional? (choose the best answer)

- [ ] A few of the Development Team members pair program and do Test Driven Development.
- [x] Development Team has all the skills to create a potentially releasable increment by the end of every Sprint.
- [ ] Every member of the Development Team is able to perform every task.
- [ ] There are no conflicts within the Development Team.

**[⬆ Back to Top](#table-of-contents)**

### For the purpose of transparency, when does Scrum say a new Increment of working Software must be available? (choose the best answer)

- [ ] When the Product Owner asks to create one.
- [x] At the end of every Sprint.
- [ ] Before the release Sprint.
- [ ] Every 3 Sprints.
- [ ] After the Acceptance Testing phase.

**[⬆ Back to Top](#table-of-contents)**

### Which three behaviors demonstrate that a team is self-organizing? (choose the best three answers)

- [ ] The Development Team inviting external people to the Sprint Planning to ask them how to turn a Product Backlog Item into an Increment via a complete and detailed Sprint Backlog.
- [ ] The Development Team members are working within the boundaries of their functional description and nicely handing off work from analyst to Developer to Tester to integration.
- [ ] The Product Owner doesn't need to be at Sprint Retrospectives.
- [ ] Stakeholders walking in at the Daily Scrum to check progress and work with the Scrum Master to optimize the functional scope for the Sprint.
- [x] Development Team members collaboratively selecting their own work during the Sprint.
- [ ] The Scrum Master is no longer needed.
- [x] The Development Team has all the skills needed to create a releasable Increment.
- [x] The Development Team creating their own Sprint Backlog, reflecting all work that is part of the Definition of Done.

**[⬆ Back to Top](#table-of-contents)**
`;

// Divide el contenido en líneas
const lines = markdownContent.split("\n");

// Inicializa un array para almacenar las preguntas
const questions = [];

// Variables auxiliares para construir cada pregunta
let currentQuestion = null;
let currentAnswers = [];

// Recorre las líneas del Markdown
for (const line of lines) {
    // Si la línea comienza con "###", crea una nueva pregunta
    if (line.trim().startsWith("###")) {
        // Guarda la pregunta anterior (si existe)
        if (currentQuestion) {
            questions.push({
                enunciado: currentQuestion,
                respuestas: currentAnswers,
            });
        }

        // Inicializa la nueva pregunta
        currentQuestion = line.trim().substring(4); // Elimina "###"
        currentAnswers = [];
    } else if (line.trim().startsWith("- [")) {
        // Si la línea es una respuesta, agrégala al array correspondiente
        const answerText = line.trim().substring(6); // Elimina el marcador "- [x] "
        const isCorrect = line.includes("[x]");
        currentAnswers.push({ texto: answerText, valor: isCorrect });
    }
}

// Guarda la última pregunta
if (currentQuestion) {
    questions.push({
        enunciado: currentQuestion,
        respuestas: currentAnswers,
    });
}

let preguntas = 0;
let puntos = 0;
let opcionesElegidas = [];
const enunciado = document.querySelector('.question');
const puntosspan = document.querySelector('.puntos');
const preguntasspan = document.querySelector('.preguntas');
const opciones = document.querySelector('.answers');
const boton = document.querySelector('button');
const notes = document.querySelector('.notes');

function sonIguales(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    const strArr1 = JSON.stringify([...new Set(arr1.flat())]);
    const strArr2 = JSON.stringify([...new Set(arr2.flat())]);
    return strArr1 === strArr2;
}

const checkanswers = function (event) {
    if (sonIguales(enunciado.dataset.correct.split(','), opcionesElegidas)) {
        puntos++;
    }
    preguntas++;
    notes.textContent = notes.textContent + '\nRespuestas correctas: ' + enunciado.dataset.correct;

    nextquestion();
}

const markanswer = function(event) {
    const obj = event.currentTarget;
    if (!obj.dataset.marked == '1') {
        boton.disabled = false;
        obj.dataset.marked = '1';
        obj.style.color = 'blue';
        obj.style.fontWeight = 'bold';
    } else {
        obj.dataset.marked = '';
        obj.style.color = 'black';
        obj.style.fontWeight = 'normal';
    }
    const elegidos = opciones.querySelectorAll('li[data-marked="1"]');
    opcionesElegidas = [];
    elegidos.forEach((item) => opcionesElegidas.push(item.dataset.index));
    notes.textContent = 'respuestas elegidas: ' + opcionesElegidas.join(',');
}

const nextquestion = function () {
    opcionesElegidas = [];
    boton.disabled = true;
    const miquestion = questions.shift();
    preguntasspan.textContent = preguntas;
    puntosspan.textContent = puntos;
    enunciado.textContent = miquestion.enunciado;
    opciones.innerHTML = '';
    const correct = [];
    miquestion.respuestas.forEach((option, index) => {
        if (option.valor) {
            correct.push(index);
        }
        let item = document.createElement("li");
        opciones.appendChild(item);
        opciones.lastElementChild.textContent = option.texto;
        opciones.lastElementChild.dataset.value = option.valor;
        opciones.lastElementChild.dataset.index = index;
        opciones.lastElementChild.addEventListener('click', markanswer);
    });
    enunciado.dataset.correct = correct.join(',');
}

boton.addEventListener('click', checkanswers);
nextquestion();
