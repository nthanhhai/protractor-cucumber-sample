Feature: As A user I should be able to access Every Accounts

    @TEST
    Scenario: Verify that user can see all Everyday accounts types
        Given I open Commbank Home Page
            And I click on "Banking" in top menu
            And I click on "Everyday accounts" section
        Then I should see all types of Everyday accounts