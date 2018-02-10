package se.arcticblue.heracles.client;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class ClientApplication extends Application<ClientConfiguration> {

  public static void main(final String[] args) throws Exception {
    new ClientApplication().run(args);
  }

  @Override
  public void initialize(Bootstrap<ClientConfiguration> bootstrap) {
    bootstrap.addBundle(new AssetsBundle("/assets", "/", "index.html"));
  }

  public void run(ClientConfiguration configuration, Environment environment) throws Exception {
    environment.jersey().setUrlPattern("/api/*");
  }
}
