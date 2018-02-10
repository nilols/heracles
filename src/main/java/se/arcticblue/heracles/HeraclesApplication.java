package se.arcticblue.heracles;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import se.arcticblue.heracles.api.endpoints.MessageEndpoint;

public class HeraclesApplication extends Application<HeraclesConfiguration> {

  public static void main(final String[] args) throws Exception {
    new HeraclesApplication().run(args);
  }

  @Override
  public void initialize(Bootstrap<HeraclesConfiguration> bootstrap) {
    bootstrap.addBundle(new AssetsBundle("/assets", "/", "index.html"));
  }

  public void run(HeraclesConfiguration configuration, Environment environment) throws Exception {
    environment.jersey().setUrlPattern("/api/*");
    environment.jersey().register(new MessageEndpoint());
  }
}
