package se.arcticblue.heracles.service.endpoints;

import se.arcticblue.heracles.service.dto.Message;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Collections;
import java.util.List;

@Path("messages")
@Produces(MediaType.APPLICATION_JSON)
public class MessageEndpoint {

  @GET
  public List<Message> getMessages() {
    return Collections.singletonList(new Message("testing dropwizard " + System.currentTimeMillis()));
  }
}
