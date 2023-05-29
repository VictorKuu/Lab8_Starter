# Lab 8 - Starter
Name: Victor Ku

1) In my Recipe project development pipeline, I would fit my automated tests in GitHub Actions. GitHub Actions allows us to automatically run tests that we design whenever we push new code to the repository. Manually running them no longer makes the tests automated. Finally, unit testing, intstead of end to end testing, makes debugging code a lot easier, which is why I don't think this option is feasible. 
2) I would not use end to end test to check if a function is returning the correct output. A function is a small portion of the entire app. Therefore, I'd use a smaller scaled version to specifically test it. 

3) I would not use a unit test to test the "message" feature of a messaging application. The whole feature seems to involve a conglomeration of many functions. That seems like way too big of a project for unit testing to be a viable option.

4) I would use a unit test to test the max message length of a messaging application. This is because this feature can easily be tested with a single function, making it perfect for unit testing.

