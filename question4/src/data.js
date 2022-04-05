const allCommand = {
  1: {
    Language: "C#",
    moreInformation: "For more information, ",
    Link: {
      Link: "https://cloud.google.com/dotnet/docs/setup",
      content: "Setting Up a C# Development Environment.",
    },
    Condition:
      "If you are using Visual Studio 2017 or higher, open nuget package manager window and type the following:",
    Commad: "Install-Package Google.Apis",
    Condition_second:
      "If you are using .NET Core command-line interface tools to install your dependencies, run the following command:",
    Commad_seocnd: "dotnet add package Google.Apis",
  },
  2: {
    Language: "Go",
    moreInformation: "For more information, ",
    Link: {
      Link: "https://cloud.google.com/dotnet/docs/setup",
      content: "Setting Up a C# Development Environment.",
    },
    Condition: null,
    Commad: "go get cloud.google.com/go/speech/apiv1",
    Condition_second: null,
    Commad_seocnd: null,
  },
  3: {
    Language: "Node.js",
    moreInformation: "For more information, ",
    Link: {
      Link: "https://cloud.google.com/dotnet/docs/setup",
      content: "Setting Up a C# Development Environment.",
    },
    Condition: null,
    Commad: "npm install --save @google-cloud/speech",
    Condition_second: null,
    Commad_seocnd: null,
  },
};

export default allCommand;
