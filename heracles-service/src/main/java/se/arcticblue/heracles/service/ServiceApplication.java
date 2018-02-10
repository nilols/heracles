package se.arcticblue.heracles.service;


import io.dropwizard.Application;
import io.dropwizard.setup.Environment;
import se.arcticblue.heracles.service.endpoints.MessageEndpoint;

public class ServiceApplication extends Application<ServiceConfiguration> {

  public static void main(final String[] args) throws Exception {
    new ServiceApplication().run(args);
  }

  public void run(ServiceConfiguration configuration, Environment environment) throws Exception {
    environment.jersey().register(new MessageEndpoint());
  }
}
