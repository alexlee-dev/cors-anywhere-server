import App from "./app";
import AssetsController from "./controllers/assets";
import ScriptsController from "./controllers/scripts";

/**
 * Main Server Application.
 */
const main = async (): Promise<void> => {
  try {
    if (!process.env.PORT) throw new Error("No PORT");

    const app = new App(
      [new AssetsController(), new ScriptsController()],
      process.env.PORT
    );

    app.listen();
  } catch (error) {
    console.error(error);
  }
};

main();
