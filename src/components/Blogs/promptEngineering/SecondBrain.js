import apiKeyModal from "../../../images/blogs/secondBrain/api-key-modal.png";
import chromaDiagram from "../../../images/blogs/secondBrain/chroma-diagram.png";
import createDatabase from "../../../images/blogs/secondBrain/create-database.png";
import obsidianGraph from "../../../images/blogs/secondBrain/obsidian-graph.png";
import queryDocker from "../../../images/blogs/secondBrain/query-docker.png";
import queryEntryAction from "../../../images/blogs/secondBrain/query-entry-action.png";
import response1 from "../../../images/blogs/secondBrain/response-1.png";
import response2 from "../../../images/blogs/secondBrain/response-2.png";
import response3 from "../../../images/blogs/secondBrain/response-3.png";
import tag from "../../../images/blogs/secondBrain/tag.png";

export default function SecondBrain() {
  return (
    <div className="flex bg-zinc-800">
      <div className="pb-16 mx-auto container pt-3 px-6 max-w-screen-md">
        <h1 className="blog-heading">Second Brain</h1>
        <h1 className="blog-subheading">
          How to give ChatGPT access to everything you know… not that it needs
          to get any more intelligent.
        </h1>
        <h1 className="blog-metadata">Sun 8 Apr - Blog Post #3</h1>
        <p className="regular-paragraph">
          ChatGPT has only been trained in data up until 2021 and the
          limitations in its knowledge is weel documented. This is gradually
          changing, with new models being trained due to declining costs and
          LLM's being given the ability to find its own information. The “New
          Bing” has access to the internet, however in my experience it is still
          a bit buggy and doesn't always produce the desired outcome. Although
          I'm sure it will improve at a rapid rate regardless.
        </p>
        <p className="regular-paragraph">
          Despite this, giving LLM's access to more publicly available
          information will not solve all problems. Companies are starting to see
          the possibilities of implementing LLM's over the top of their own
          data. There are potentially huge benefits in productivity by reducing
          the workload of employees and automating it with AI, as well as simply
          giving AI access to confidential information that they don't want
          shared with the rest of the world.
        </p>
        <p className="regular-paragraph">
          This idea of using ChatGPT with my own data was intriguing, so I set
          out to complete a project of creating an Obsidian Plugin to do just
          that.{" "}
          <a
            href="https://obsidian.md/"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            Obsidian
          </a>{" "}
          is a knowledge base app, a bit like Microsoft OneNote but with the
          ability to customise a few more things. It's a great way to keep track
          of the stuff you're working on and is where I've started noting down
          pretty much everything. It also has a really cool graph view which
          shows how all your documents interconnect and relate to one another.
        </p>
        <img src={obsidianGraph} alt="Obsidian Graph" className="blog-image" />
        <p className="paragraph-heading">
          <b>The Concept:</b>
        </p>
        <p className="regular-paragraph">
          I write down a lot of things based on what I'm reading, ideas I think
          of, stuff I want to document about myself. What if, instead of giving
          someone access to all these documents and letting them sift through, I
          gave them access to my 'Second Brain', which would answer any
          questions a user might have about the things I've worked on. So a
          scenario I can think of is instead of putting a traditional resume on
          my website, I could have more detailed information in the background
          that someone could ask a specific question about. Instead of looking
          through irrelevant information on my resume, a user can ask a question
          and get a specific, detailed answer. A bit like a fancy ctrl-F.
        </p>
        <p className="regular-paragraph p-1 pt-4 pl-4">
          <b>Information on CV:</b>
        </p>
        <p className="regular-paragraph">
          Mobile Dev Experience: 3+ years (React and Flutter)
        </p>
        <p className="regular-paragraph p-1 pt-4 pl-4">
          <b>Second Brain:</b>
        </p>
        <p className="regular-paragraph">
          <i>Question:</i> What is Oliver's experience in Flutter Development?
        </p>
        <p className="regular-paragraph">
          <i>Answer:</i> Oliver has worked with Flutter for a number of years,
          developing several mobile apps. In these personal projects, he has
          gained experience in several supporting technologies, such as
          Firebase, SQLite and Square Payments.
        </p>
        <p className="regular-paragraph">
          OK so maybe a recruiter doesn't need this much detailed information,
          however it is a cool POC which I think could be fun to add to a
          website (spoiler - I haven't yet).
        </p>
        <p className="paragraph-heading">The Design:</p>
        <p className="regular-paragraph">
          After a bit of research, I found that the best way to create this kind
          of system was to use{" "}
          <a
            href="https://platform.openai.com/docs/guides/embeddings"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            {" "}
            embeddings
          </a>
          . As stated on OpenAI's website, embeddings allow you to measure the
          relatedness of strings, so if a user asks a question, it is possible
          to determine what content is most related to that question.
        </p>
        <p className="regular-paragraph">
          To store and retrieve these embeddings, it is best to use a vector
          database and I decided to use{" "}
          <a
            href="https://docs.trychroma.com/"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            Chroma
          </a>
          , one of the options recommended by OpenAI. Chroma is an open-source
          vector database and happened to have Typescript support, as well as
          the server side application in the form of a Docker container, which
          ticked all the boxes for me.
        </p>
        <img src={chromaDiagram} alt="Chroma Diagram" className="blog-image" />
        <p className="regular-paragraph text-center">
          <i>
            Source:{" "}
            <a
              href="https://docs.trychroma.com/"
              target="_blank"
              className="text-yellow-100 hover:underline"
              rel="noreferrer"
            >
              Chroma
            </a>
          </i>
        </p>
        <p className="paragraph-heading">The Implementation:</p>
        <p className="regular-paragraph">
          With this design, which I will admit was not the first one I came up
          with, I got to work. Obsidian is built on{" "}
          <a
            href="https://www.electronjs.org/"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            Electron
          </a>
          , which is a framework that allows you to create desktop applications
          using web technologies, rendered in a version of the Chromium browser
          engine, so basically means writing code in Javascript/Typescript.
          There are a bunch of cool native{" "}
          <a
            href="https://marcus.se.net/obsidian-plugin-docs/user-interface"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            Obsidian UI elements and actions
          </a>{" "}
          developers can work with, which made development far easier and
          essentially just left me (and again, ChatGPT) to write some of the
          logic.
        </p>
        <p className="regular-paragraph p-1 pl-4">How it works:</p>
        <p className="regular-paragraph p-1 pl-8">
          1. Developer tags the documents they want included with{" "}
          <b>#second-brain.</b>
        </p>
        <img src={tag} alt="Tag" className="blog-image" />
        <p className="regular-paragraph p-1 pl-8">
          2. Developer enters their OpenAI API Key via an action in the Obsidian
          command pallet.
        </p>
        <img src={apiKeyModal} alt="API Key Modal" className="blog-image" />
        <p className="regular-paragraph p-1 pl-8">
          3. Developer loads their data into ChromaDB. The logic behind this is
          to go through each file in the Obsidian Vault, pulling out the ones
          with the correct tags, splitting them up into paragraphs, generating
          the embeddings and then passing them into ChromaDB with the relevant
          ID's, metadata and titles.
        </p>
        <img
          src={createDatabase}
          alt="Create Database"
          className="blog-image"
        />
        <p className="regular-paragraph p-1 pl-8">
          4. User queries the second brain by entering their question via
          another action in the Obsidian command pallet. In the background,
          ChromaDB is passed the query and returns the relevant embeddings and
          metadata. With that metadata, the correct paragraphs are identified in
          the vault and then passed to ChatGPT.
        </p>
        <img
          src={queryEntryAction}
          alt="Enter a Query"
          className="blog-image"
        />
        <p className="regular-paragraph p-1 pl-8">
          5. ChatGPT is given the same question, along with the paragraphs
          passed back by ChromaDB. It is also given a prompt which outlines what
          it's purpose is and not to refer to any information outside of what it
          is given. Although it would be fun to pretend to know everything
          ChatGPT has been trained on.
        </p>
        <img src={queryDocker} alt="Docker Query" className="blog-image" />
        <p className="regular-paragraph p-1 pl-8">
          6. Once ChatGPT has generated a response, present the information to
          the user in the form of a Modal.
        </p>
        <p className="regular-paragraph">
          Based on the responses there are some things to fix, such as getting
          answers in a mix of first and third person, as well as maybe having
          the need to adjust the content returned from Chroma based on the
          question.
        </p>
        <img src={response1} alt="Example Response 1" className="blog-image" />
        <p className="regular-paragraph text-center">
          <i>Question: What does Oliver know about AI?</i>
        </p>
        <img src={response2} alt="Example Response 2" className="blog-image" />
        <p className="regular-paragraph text-center">
          <i>
            Question: What software development projects has Oliver worked on?
          </i>
        </p>
        <img src={response3} alt="Example Response 3" className="blog-image" />
        <p className="regular-paragraph text-center">
          <i>Question: Can you tell me a little bit about Oliver?</i>
        </p>
        <p className="regular-paragraph">
          Want to see the code? Check out my repo{" "}
          <a
            href="https://github.com/ottoohey/second-brain"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <p className="paragraph-heading">Next Steps:</p>
        <p className="regular-paragraph">
          At this point, I had a pretty decent, albeit entirely local, POC
          going. However, for it to be of use to anyone aside from myself, there
          are a few things I would need/want to implement:
        </p>
        <p className="regular-paragraph">
          <b>Access for everyone!</b> Host Chroma in the cloud. This would allow
          everyone to query my second brain.
        </p>
        <p className="regular-paragraph">
          <b>A more dynamic vector database.</b> Add better tags to the metadata
          in ChromaDB. Currently, when ChromaDB is queried, it returns a couple
          of paragraphs based on the relatedness of the query and the content of
          the paragraph. However, it lacks a bit of context, which would be
          helpful in summarising data. For example, if a user asks: “Please give
          me a summary of Oliver's personal projects”, ChromaDB might struggle
          to return all the relevant information if I have worked on 10+
          projects, or if those paragraphs don't contain “personal projects” and
          therefore aren't return to ChatGPT to derive an answer from. By adding
          tags to files and passing an entire document to ChatGPT for
          summarisation purposes would be cool.
        </p>
        <p className="regular-paragraph">
          <b>Coversational Intelligence.</b> Giving ChatGPT a “memory”, so users
          can have conversations instead of posing standalone questions. This is
          one of the features of ChatGPT which has made it so incredible to work
          with and would provide a much better user experience overall.
        </p>
        <p className="regular-paragraph">
          Whether I get around to implementing these next steps is another
          matter…
        </p>
      </div>
    </div>
  );
}
