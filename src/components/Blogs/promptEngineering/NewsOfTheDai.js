import jsonExample from "../../../images/blogs/newsOfTheDai/json-example.jpg";
import banner from "../../../images/blogs/newsOfTheDai/news-of-the-dai-banner.png";
import screenshotOne from "../../../images/blogs/newsOfTheDai/screenshot-1.png";
import screenshotTwo from "../../../images/blogs/newsOfTheDai/screenshot-2.png";
import screenshotThree from "../../../images/blogs/newsOfTheDai/screenshot-3.png";

export default function NewsOfTheDai() {
  return (
    <div className="flex bg-zinc-800">
      <div className="pb-16 mx-auto container pt-3 px-6 max-w-screen-md">
        <h1 className="blog-heading">News Of The Dai</h1>
        <h1 className="blog-subheading">
          On-demand, tailored news summaries for any topic.
        </h1>
        <h1 className="blog-metadata">Sun 25 Jun - Blog Post #4</h1>
        <p className="regular-paragraph">
          Having now played around with ChatGPT for a while and worked it into a
          proof of concept piece of work{" ("}
          <a
            href="https://www.olivertoohey.com/#/blogs/3"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            Second Brain
          </a>
          {")"}, I wanted to develop something that could be more widely used by
          non-technical people. It was also important I could complete it over a
          couple of weeks on top of my actual job and not get too bogged down in
          a large project.
        </p>
        <p className="regular-paragraph">
          Having been subscribed to a few email and podcast news summaries, I
          generally became disinterested due to the fact that the stories were
          curated by someone else and I couldn't choose what I wanted
          summarised. Sure, I could subscribe to a dozen different summaries on
          different topics, but that wasn't exactly convenient. Enter News Of
          The Dai, something I brainstormed a while back and reinforced by my
          subsequent discovery of apps like{" "}
          <a
            href="https://artifact.news/"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            Artefact
          </a>
          , a news aggregation app by the creators of Instagram. Clearly, I
          wouldn't be able to build anything of that magnitude by myself, but I
          also wanted to try a slightly different approach.
        </p>
        <img src={banner} alt="News Of The Dai" className="blog-image" />
        <p className="paragraph-heading">
          <b>The Idea:</b>
        </p>
        <p className="regular-paragraph">
          A lot of apps try to use AI to curate what content they think the user
          might be interested in. This can work well and provide users with
          endless content for them to scroll through, however, I wanted to work
          under the assumption that the user knows what they want to read about,
          especially when it comes to their news. I felt there was an
          opportunity to use AI to present the news to the user, instead of
          letting it choose what the user would be interested in. ChatGPT is
          fantastic at synthesising information and returning it in any style
          you request, so it would have no issues taking in an entire news
          article and reducing it to three important dot points that can be read
          in 30 seconds by a user. News Of The Dai would allow the user to
          choose news based on categories and then summarise it for them.
        </p>
        <p className="paragraph-heading">
          <b>The Technical Challenge:</b>
        </p>
        <p className="regular-paragraph">
          Getting ChatGPT to summarise an article is actually really easy. You
          could copy-paste an article into the chatbot right now, ask it to
          summarise and it would do so pretty much instantly. The challenge is
          requesting that response in a format that can be used and reused
          consistently throughout an application. Unfortunately, the application
          code at the end must parse data that is exactly the same each time,
          otherwise it will not be able to present it correctly and throw an
          error.
        </p>
        <p className="regular-paragraph">
          Getting that precise response is where good prompt engineering skills
          come into play. It took a few iterations to land on the prompt I used,
          which included asking for separate lines for each point and separating
          points with a special character/delimiter, however I soon realised
          these wouldn't work for a few reasons.
        </p>
        <p className="regular-paragraph pb-0">
          <b>
            Reason 1: The more information you pass ChatGPT, the less effective
            your instructions become.
          </b>
        </p>
        <p className="regular-paragraph">
          I should preface this by saying this is becoming less of an issue as
          ChatGPT is updated. GPT-4 is very impressive when it comes to handling
          large amounts of information. However, I only had access to the
          GPT-3.5 API, which could seemingly forget or ignore instructions when
          you had a complex prompt. I found the fix for this was saving my most
          important instructions for last and reiterate them if necessary.
        </p>
        <p className="regular-paragraph pb-0">
          <b>
            Reason 2: It is very difficult to predict exactly what ChatGPT will
            return to you.
          </b>
        </p>
        <p className="regular-paragraph pb-0">
          By this I mean, you might ask for a summary of three articles in a
          specific format, each with three dot points and receive any or all of
          the following issues:
        </p>
        <div className="pl-8">
          <p className="regular-paragraph p-1 pl-2 display: list-item">
            A reply before the main response. E.g. 'Sure, here are the summaries
            on those three articles…' - how do you remove this before returning
            it to the user?
          </p>
        </div>
        <div className="pl-8">
          <p className="regular-paragraph p-1 pl-2 display: list-item">
            Missing dot points. How does the application resolve this when it is
            expecting a certain amount of data?
          </p>
        </div>
        <div className="pl-8">
          <p className="regular-paragraph p-1 pl-2 pb-4 display: list-item">
            Prefixes to information, such as putting 'Article 1' or 'First
            summary' before the actual summary. It is almost impossible to
            predict all variations of these.
          </p>
        </div>
        <p className="regular-paragraph pb-0">
          <b>
            Reason 3: Using a non-standard format would require ChatGPT to
            follow the instructions perfectly, as it wouldn't have been trained
            on any examples.
          </b>
        </p>
        <p className="regular-paragraph">
          I probably should have realised this one a bit sooner, but using a
          standard structured data format would make my life a lot easier.
        </p>
        <div class="grid grid-flow-col auto-cols-auto content-center">
          <img
            src={screenshotOne}
            alt="Screenshot One"
            className="blog-image w-48"
          />
          <img
            src={screenshotTwo}
            alt="Screenshot Two"
            className="blog-image w-48"
          />
          <img
            src={screenshotThree}
            alt="Screenshot Three"
            className="blog-image w-48"
          />
        </div>
        <p className="regular-paragraph text-center">
          <i>
            <a
              href="https://apps.apple.com/au/app/news-of-the-dai/id6450505763"
              target="_blank"
              className="text-yellow-100 hover:underline"
              rel="noreferrer"
            >
              News Of The Dai
            </a>{" "}
            Screenshots
          </i>
        </p>
        <p className="paragraph-heading">
          <b>My Solution:</b>
        </p>
        <p className="regular-paragraph">
          In the end, I settled on asking for my response in JSON format. The
          main benefits of this were firstly that it is an extensible format,
          meaning it would dynamically adjust based on what information was put
          into it and therefore let me work with differently sized responses.
          Secondly, it would allow me to exclude anything outside of the JSON
          object (see point one of reason two) using{" "}
          <a
            href="https://en.wikipedia.org/wiki/Regular_expression"
            target="_blank"
            className="text-yellow-100 hover:underline"
            rel="noreferrer"
          >
            regex
          </a>
          .
        </p>
        <p className="regular-paragraph">
          Below is an example of a response I would receive from ChatGPT. By
          asking for a JSON response, it is far easier to exclude the intro and
          full stop with regex, and dynamically adjust the UI based on the size
          of the arrays in the response due to missing information.
        </p>
        <img
          src={jsonExample}
          alt="JSON Example Response"
          className="blog-image"
        />
        <p className="paragraph-heading">
          <b>What's Next?</b>
        </p>
        <p className="regular-paragraph">
          I wanted to get this demo out quickly instead of turning it into a
          massive project, hence why I have already released it, although what I
          will be working on next is improving the summary response from
          ChatGPT. Unfortunately, it still formats the JSON incorrectly due to
          something like a missing bracket, however I think I can improve this
          by re-requesting the summary in a properly formatted response.
          Furthermore, giving users the ability to choose the exact
          topics/categories/publications they would like news from would be a
          big upgrade, as they are both slightly too general right now.
        </p>
        <p className="regular-paragraph">
          Ultimately, I am happy with how this demo worked out and look forward
          to updating it over the coming weeks.
        </p>
      </div>
    </div>
  );
}
