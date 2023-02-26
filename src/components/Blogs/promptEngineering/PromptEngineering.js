import firstPrompt from "../../../images/blogs/promptEngineering/prompt-1.png";
import secondPrompt from "../../../images/blogs/promptEngineering/prompt-2.png";
import thirdPrompt from "../../../images/blogs/promptEngineering/prompt-3.png";

export default function PromptEngineering() {
  return (
    <div className="flex bg-zinc-800">
      <div className="pb-16 mx-auto container pt-3 px-6 max-w-screen-md">
        <h1 className="blog-heading">Prompt Engineering</h1>
        <h1 className="blog-subheading">Help AI Help You</h1>
        <h1 className="blog-metadata">Sun 26 Feb - Blog Post #1</h1>
        <p className="regular-paragraph">
          Like most tech nerds, I signed up for ChatGPT when it first launched
          and had some fun playing around with it. I was amazed by some of the
          responses I received. It really was like talking to an actual person
          who had infinite knowledge (up until 2021 at least). At first, I was
          asking it to give me answers to simple factual questions, which it
          would provide in a couple of well constructed sentences. Cool, but
          nothing world changing. However, when I moved onto more challenging
          tasks which required some interpretation, such as writing code, I
          quickly recognised that although it appeared impressive on the surface
          to the layperson, there were certainly some flaws in it's outputs. And
          just like that, I stopped using ChatGPT, because it suddenly felt like
          a bit of a gimmick that couldn't really do all my work for me (which
          is also wrong for a reason other than my prompts, but that is for
          another blog post).{" "}
        </p>
        <p className="regular-paragraph">
          A couple of months later, I heard about Prompt Engineering, a method
          of prompting an AI in an explicit and descriptive way to influence the
          output you receive. Instead of giving ChatGPT a question that is broad
          and ambiguous, which will in turn generate a very general answer,
          inputting a question in a logical way with parameters and requirements
          dramatically improves the output received. It makes sense too. For
          example, everyone has been asked “What do you do?” at some point in
          their life, followed up with “So what do you do in that role?”. For
          most people, summarising everything you do into a couple of sentences
          is not easy, may differ slightly from another person in the same role
          and certainly won't cover specific processes in any detail. It's not
          an incorrect answer, but it will never be more useful than a surface
          level answer. Asking ChatGPT broad, open ended questions will give you
          the same results.
        </p>
        <p className="regular-paragraph">
          To give you a basic example, lets assume you want ChatGPT to write an
          essay on a book, Antony and Cleopatra, which you have been reading at
          school (I wish I had ChatGPT when I had to do this). It would be easy
          to ask ChatGPT to:{" "}
          <b>
            <i>“Summarise the key themes of Antony and Cleopatra”</i>
          </b>{" "}
          and receive a list of generic dot points.
        </p>
        <img src={firstPrompt} alt="First Prompt" className="blog-image" />
        <p className="regular-paragraph">
          Not bad, however, if you want something that is more than just a
          general list of themes, you need to improve your prompt. A logical
          next step would be to ask ChatGPT to:
          <b>
            <i>
              “Summarise the key themes of Antony and Cleopatra, focusing on the
              dichotomy of Love and War. Please give me 3 dot points which
              represent paragraphs between and introduction and conclusion in an
              essay, and which also flow from one to another logically.”
            </i>
          </b>
          .
        </p>
        <img src={secondPrompt} alt="Second Prompt" className="blog-image" />
        <p className="regular-paragraph">
          Suddenly, you are met with a much more cohesive list of dot points
          which all revolve around a central theme and each paragraph linking
          from one to the next. These elements, which we all know are crucial to
          a good essay, did not appear in the first output, and to ChatGPT's
          credit, why should it? All you had asked was vague summarisation of an
          entire book with no other parameters.
        </p>
        <p className="regular-paragraph">
          However we don't have to stop here and can go a step further. What if
          we gave ChatGPT an alternate persona in which to give us a response?
          The amazing thing about ChatGPT is that it knows just about everything
          and anyone who has existed in some form online up until 2021. That
          means, it knows who the most prominent Shakespeare writers are as well
          as all their work. Why not get ChatGPT to write an essay as they
          would?
        </p>
        <p className="regular-paragraph">
          <b>
            <i>
              “I would like you to pretend you are the expert Shakespeare
              historian James Shapiro. Assume you are giving your answer in a
              way that young adults (16-18 years old) can clearly understand.
              Summarise the key themes of Antony and Cleopatra, focusing on the
              dichotomy of Love and War. Please give me 3 dot points which
              represent paragraphs, and which also flow from one to another
              logically. Do not write an introduction or conclusion. Make each
              dot point at least 80 words long and aim for about 100 words.”
            </i>
          </b>
        </p>
        <img src={thirdPrompt} alt="Third Prompt" className="blog-image" />
        <p className="regular-paragraph">
          You will now see slightly more complex themes and ideas presenting
          themselves, although still understandable to young adults. It also
          ignored the introduction and conclusion as you requested and nearly
          hit 80 words per paragraph.
        </p>
        <p className="regular-paragraph">
          This leads me into my final point - keep iterating upon your prompts.
          By updating prompts you have already used, you will be able to
          determine exactly how you influence the outputs of ChatGPT. Keep track
          of what works, how explicit you need to be and the current limits of
          the AI. As with the third example prompt, requests to follow a set of
          requirements, such as word count, are sometimes ignored. This probably
          means you need to be more explicit in some way and update your prompt.
        </p>
        <p className="regular-paragraph">
          Clearly, this is just the beginning of what you can do with Prompt
          Engineering and AI. By applying this method over any interactions with
          AI, you can manipulate it to act in a much more specific way for your
          use case. In later blog posts, I will go into more detailed examples
          of Prompt Engineering, outlining the steps necessary for a useful
          output.
        </p>
      </div>
    </div>
  );
}
