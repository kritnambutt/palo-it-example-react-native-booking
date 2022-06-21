Feature: Landing page when first launch​​
​​
    Scenario: I launch the app, and I should be on landing

        Given I launched the app

        Then I should be on the "landing-screen"
        Then I see the text "landing-page-title" with value "Meeting Room Booking"

    Scenario: I see buttons on landing page

        Given I am on landing page
        Then I see the "login-button" component
        And I see the "signup-button" component