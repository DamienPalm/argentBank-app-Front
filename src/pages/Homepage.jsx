import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import chat from "../assets/img/icon-chat.png";
import money from "../assets/img/icon-money.png";
import security from "../assets/img/icon-security.png";

export function Homepage() {
  return (
    <main className="main">
      <Hero />
      <section className="main__features">
        <h2 className="sr-only">Features</h2>
        <Features
          icon={chat}
          alt={"icon chat"}
          title={"You are our #1 priority"}
          text={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <Features
          icon={money}
          alt={"icon billet"}
          title={"More savings means higher rates"}
          text={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <Features
          icon={security}
          alt={"icon bouclier"}
          title={"Security you can trust"}
          text={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
    </main>
  );
}
