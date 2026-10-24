# Hack or Treat

Explore a fictional Halloween campus schedule and build on it during the workshop. The events are made up, and saving an event is only a personal bookmark—not registration.

## Choose how to get started

### Run on your computer

Install [Git](https://git-scm.com/downloads) and [Node.js 22.22.1](https://nodejs.org/). Then open a terminal and run:

```sh
git clone https://github.com/scottluskcis/hack-or-treat.git
cd hack-or-treat
corepack enable
corepack prepare pnpm@10.34.8 --activate
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Leave the terminal running while you use the app; press `Ctrl+C` there when you are done.

### Open in a dev container

Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and [Visual Studio Code](https://code.visualstudio.com/), then install the **Dev Containers** extension in VS Code. Clone this repository using the steps above and open its folder in VS Code. When prompted, choose **Reopen in Container** and wait for setup to finish. In the VS Code terminal, run:

```sh
pnpm dev
```

Open the forwarded **Hack or Treat** preview.

## During the workshop

The app already shows the sample events. The workshop will guide you through adding the ability to save events. GitHub Copilot can help, but you can participate without it.
