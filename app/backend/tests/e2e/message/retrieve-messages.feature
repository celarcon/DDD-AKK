Feature: Retrieve a messages list
  In order to retrieve messages in the platform
  I want to retrieve a messages list

  Scenario: A valid retrieve messages list
    Given I send a GET request to "/messages" to retrieve a messages list with body:
    """
      {
        "sortedBy": {
          "columnName": "name",
          "ordering": "desc"
        },
        "search": "",
        "limit": 10,
        "page": 1
      }
    """
    Then the response status code should be 200
    And the response should be a messages list