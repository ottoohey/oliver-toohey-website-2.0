import goodPrompt from "../../../images/blogs/perfectPromptRecipe/good-prompt.png";
import badPrompt from "../../../images/blogs/perfectPromptRecipe/bad-prompt.png";

export default function NOTD() {
  return (
    <div className="flex bg-zinc-800">
      <div className="pb-16 mx-auto container pt-3 px-6 max-w-screen-md">
        <h1 className="blog-heading">News Of The Dai</h1>
        <h1 className="blog-subheading">
          (Not so) Secret Ingredient: Your Words
        </h1>
        <h1 className="blog-metadata">Sun 5 Mar - Blog Post #2</h1>
        <p className="regular-paragraph">
          Following on from my first blog, it should be clear that specificity
          is key when talking with ChatGPT. There is a huge variation in
          responses you will receive from asking a broad, ambiguous question
          compared to posing a question with certain 'parameters', which more
          clearly define the answer you are looking for from ChatGPT (AKA Prompt
          Engineering). In this post, I will detail the steps I have taken in
          order to elicit the response I am looking for from ChatGPT.
        </p>
        <p className="regular-paragraph">
          Whilst still in its infancy, there are instructions and steps popping
          up everywhere about Prompt Engineering with the 'recipe' to create the
          best prompts. Well, think of me as [insert celebrity chef here] who is
          giving you their take on this special dish.
        </p>
        <p className="regular-paragraph p-1 pt-4 pl-4">
          Recipe: <b>The Perfect Prompt</b>
        </p>
        <p className="regular-paragraph p-1 pl-4">
          Ingredients: <b>Your Words</b>
        </p>
        <p className="regular-paragraph p-1 pl-4">Steps:</p>
        <p className="regular-paragraph p-1 pl-8">
          <b>1. Decide who you are speaking to</b>
        </p>
        <p className="regular-paragraph p-1 pl-8">
          <b>2. Provide some context</b>
        </p>
        <p className="regular-paragraph p-1 pl-8">
          <b>3. Define your variables</b>
        </p>
        <p className="regular-paragraph p-1 pl-8">
          <b>4. Give an example</b>
        </p>
        <p className="regular-paragraph p-1 pl-8">
          <b>5. Extras</b>
        </p>
        <p className="regular-paragraph p-1 pl-8">
          <b>6. Make the request</b>
        </p>
        <p className="paragraph-heading pt-6">Decide who you are speaking to</p>
        <p className="regular-paragraph">
          Get creative with this. ChatGPT will happily take on any role you
          assign it (within reason). If you are looking for information on a
          specific topic, 99% of the time you are better off speaking to a
          specialist. You wouldn't ask a GP to perform brain surgery, you would
          consult a Neurosurgeon. Ask ChatGPT to perform as a specialist and it
          will set the tone for the output.
        </p>
        <p className="paragraph-heading">Provide some context</p>
        <p className="regular-paragraph">
          Now that ChatGPT knows how it's supposed to behave, give it some
          context around your question. This all links back to providing some
          detail to your request. I will admit that when starting in new teams
          at work, I have made the mistake of asking questions to my seniors
          with no context, which of course doesn't make much sense to them based
          on the confused looks on their faces. However, they have the ability
          to ask questions for clarity. ChatGPT will not do this, and instead,
          it will answer confidently regardless of your awareness of the quality
          of the output. Instead, take a step back and ask yourself what tools
          you're working with, why you are trying to tackle the problem you're
          facing and what you're trying to achieve.
        </p>
        <p className="paragraph-heading">Define your variables</p>
        <p className="regular-paragraph">
          Now that your personal expert has an idea of what you're trying to do,
          it can be helpful identify some of the inputs you are working with.
          Whilst your context might brush over these variables, it can be
          helpful to define them more clearly, such as a specific name for the
          variable and what exactly it represents. For example, 'Group A: an
          array of strings which represent the names of all users in a team'.
          Not only will this further clarify what you're doing, but it will
          allow ChatGPT to give you a response with the actual inputs you're
          working with, making it easier for you to understand.
        </p>
        <p className="paragraph-heading">Give an example</p>
        <p className="regular-paragraph">
          Providing an example will clearly define the output you want, which is
          incredibly helpful if you require an answer in a particular format.
          Based on my experience, ChatGPT has followed the example quite
          faithfully, so it is certainly worth adding to your prompt.
        </p>
        <p className="paragraph-heading">Extras</p>
        <p className="regular-paragraph">
          There are a couple of things which make it easier to work with ChatGPT
          when prompting in slightly more complex ways. The first is to ask
          ChatGPT to prefix its answer with whoever it is speaking as. For
          example, “Tech Support: Have you tried turning it off and on again?”.
          This is useful in identifying who exactly you are speaking with and
          eliminates any confusion if you are not getting the response you would
          like. Additionally, you can include an instruction to get ChatGPT back
          into character if it loses track of its task or goes off on any
          tangents. Finally, don't be afraid to add labels to each section of
          your prompt, as seen in the example below. It will help both you and
          ChatGPT identify what you're trying to do.
        </p>
        <p className="paragraph-heading">Make the request</p>
        <p className="regular-paragraph">
          I find it best to put the request at the very end of your prompt, so
          ChatGPT will take into account everything you have said prior. If you
          place it somewhere within your prompt, ChatGPT will often ignore
          anything you have said after it.
        </p>
        <p className="paragraph-heading">Example</p>
        <p className="regular-paragraph">
          <b>
            <i>
              “Hi, I would like you to write some PowerShell solutions for me
              today, as you are the expert in that particular language. I will
              now provide you an overview of the problem I am facing. Context:
              We have hundreds of users in Active Directory. We need to get a
              list of all the devices that belong to users in 'Group A' and find
              out what applications they have installed using SCCM cmdlets.
              Parameters: - Name of AD group which contains user objects, 'Group
              A' Example Output: 'User A owns Device A. On Device A, there are
              the applications: Microsoft Word, Microsoft Access, etc., User B
              owns Device B. On Device B, there are the applications: Microsoft
              PowerPoint, Microsoft Visio, etc.' When you are replying to me as
              the PowerShell expert, please prefix your answers with 'PowerShell
              Guru: ' so I know who I am talking with. If you start speaking out
              of character, I will say 'Speak as Guru' and you will return back
              to character. Request: Please provide me the list of users, their
              devices and the applications on their devices.”
            </i>
          </b>
        </p>
        <img
          src={goodPrompt}
          alt="Good Prompt Response"
          className="blog-image"
        />
        <p className="regular-paragraph">
          I encourage you to try this yourself and compare it with:{" "}
          <b>
            <i>
              “Get me a list of applications on users laptops using PowerShell.”
            </i>
          </b>
        </p>
        <img src={badPrompt} alt="Bad Prompt Response" className="blog-image" />
        <p className="regular-paragraph">
          Whilst the former gave me exactly what I was looking for, even if
          there are cases where there are a few bugs in the code to sort out,
          the latter, whilst technically correct, had too little information to
          work with and therefore was not as helpful.
        </p>
        <p className="regular-paragraph">
          Hopefully this recipe will help you improve upon your own prompts and
          help you understand how ChatGPT will respond to different
          instructions.
        </p>
      </div>
    </div>
  );
}
