Feature: Create a new message
  In order to have message in the platform
  I want to create a new message

  Scenario: A valid non existing message
    Given I send a PUT request to "/message" with body:
    """
    {
      "id":"1",
      "name": "name test",
      "text": "text test"
    }
    """
    Then the response status code should be 201
    And the response should be empty
