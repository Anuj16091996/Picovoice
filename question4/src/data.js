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
      content: "Setting Up a Go Development Environment.",
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
      content: "Setting Up a Node.js Development Environment.",
    },
    Condition: null,
    Commad: "npm install --save @google-cloud/speech",
    Condition_second: null,
    Commad_seocnd: null,
  },
  4: {
    Language: "Java",
    moreInformation: "For more information, ",
    Link: {
      Link: "https://cloud.google.com/java/docs/setup",
      content: "Setting Up a Java Development Environment.",
    },
    Condition:
      "If you are using Maven, add the following to your pom.xml file. For more information about BOMs, see The Google Cloud Platform Libraries BOM.",
    Commad:
      "<dependencyManagement> \n" +
      " <dependencies> \n" +
      "  <dependency> \n" +
      "   <groupId>com.google.cloud</groupId>\n" +
      "   <artifactId>libraries-bom</artifactId>\n" +
      "   <version>25.1.0</version>\n" +
      "   <type>pom</type>\n" +
      "   <scope>import</scope>\n" +
      "  </dependency>\n" +
      " </dependencies>\n" +
      "</dependencyManagement>\n" +
      "\n" +
      " <dependencies> \n" +
      "  <dependency> \n" +
      "   <groupId>org.json</groupId>\n" +
      "   <artifactId>json</artifactId>\n" +
      "   <version>20220320</version>\n" +
      "  </dependency>\n" +
      "  <dependency>\n" +
      "   <groupId>com.google.cloud</groupId>\n" +
      "   <artifactId>google-cloud-speech</artifactId>\n" +
      "  </dependency>\n" +
      " </dependencies>\n",

    Condition_second:
      "If you are using Gradle, add the following to your dependencies:",
    Commad_seocnd:
      "implementation platform('com.google.cloud:libraries-bom:25.1.0')\n\n" +
      "implementation 'com.google.cloud:google-cloud-speech'",
  },
  5: {
    Language: "PHP",
    moreInformation: "For more information, ",
    Link: {
      Link: "https://cloud.google.com/php/docs",
      content: "Using PHP on Google Cloud.",
    },
    Condition: null,
    Commad: "composer require google/apiclient",
    Condition_second: null,
    Commad_seocnd: null,
  },
  6: {
    Language: "Python",
    moreInformation: "For more information, ",
    Link: {
      Link: "https://cloud.google.com/python/docs/setup",
      content: "Setting Up a Python Development Environment.",
    },
    Condition: null,
    Commad: "npm install --save @google-cloud/speech",
    Condition_second: null,
    Commad_seocnd: null,
  },
  7: {
    Language: "Ruby",
    moreInformation: "For more information, ",
    Link: {
      Link: "https://cloud.google.com/ruby/docs/setup",
      content: "Setting Up a Ruby Development Environment.",
    },
    Condition: null,
    Commad: "gem install google-api-client",
    Condition_second: null,
    Commad_seocnd: null,
  },
  8: {
    Language: "React",
  },
  9: {
    Language: "Angular",
  },
  10: {
    Language: "Vue",
  },
};

export default allCommand;
