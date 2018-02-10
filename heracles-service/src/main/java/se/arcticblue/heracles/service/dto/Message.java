package se.arcticblue.heracles.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Message {

  private final String message;

  public Message(String message) {
    this.message = message;
  }

  @JsonProperty
  public String getMessage() {
    return message;
  }
}
