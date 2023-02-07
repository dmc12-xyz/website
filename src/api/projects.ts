interface Project {
  title: string;
  problem: string;
  solution: string;
  cover: string;
  images: string[];
}

export const Projects: Project[] = [
  {
    title: "DEVNODE",
    problem: "Developers spend lots of time searching a variety of internet platforms to find solutions to their project problems. Each platform represents siloed information and user-based knowledge that is difficult to discover and learn from. Our objectives was to explore the feasibility of breaking down these silos through a prototype and MVP that facilitates cross-platform Q&A.\n",
    solution: "We developed a prototype that utilises decentralised infrastructure and Discord to allow communities from various platforms to collaborate and share knowledge seamlessly, resulting in faster and higher-quality learning experiences. We are now moving forward with the MVP, which will aim to include more communities and an incentivisation protocol for contributions.\n",
    cover: "/assets/devnode/devnode_cover.png",
    images: [
      "/assets/devnode/devnode_1.png",
      "/assets/devnode/devnode_2.png",
      "/assets/devnode/devnode_3.png",
    ],
  },
  {
    title: "CLIPTO",
    problem: "Build an NFT video marketplace for creators and their audiences. The platform needed to allow anyone to create a creator profile and accept requests for NFT video content for personal and business use. The product had to be user-friendly, allowing creators to easily sign up and users to connect their wallets and request NFT videos from their favourite creators with ease.\n",
    solution: "We built an MVP and beyond solution that integrated the Clipto community. Our initial focus was on creating the core user experiences. Users can connect their wallet, become creators, and accept requests, while other users can request NFT video content from creators and make payments via a smart contract. \n" +
      "Beyond MVP deliverables included a separate business button, a bounty system that allows users to request NFT videos from creators not on the platform, and a partnership with Lens Protocol to enable users to share their NFT video content directly on the Lens platform.",
    cover: "/assets/clipto/clipto_cover.png",
    images: [
      "/assets/clipto/clipto_1.png",
      "/assets/clipto/clipto_2.png",
      "/assets/clipto/clipto_3.png",
    ],
  }
];
