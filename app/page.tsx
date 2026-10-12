import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  MapPin,
  BookOpen,
  ShieldCheck,
  Phone,
  MoveDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DemoNotice } from "@/components/demo-notice";
import { Separator } from "@/components/ui/separator";
const features = [
  {
    n: "01",
    icon: HeartPulse,
    title: "Know your next step.",
    text: "Walk through fictional situations and practice identifying a relevant next step.",
    href: "/help",
    action: "Practice a scenario",
    detail: "Medical concerns · Personal safety · Campus accidents",
  },
  {
    n: "02",
    icon: Phone,
    title: "Know who to contact.",
    text: "Explore a simple directory. Get familiar with the people and roles that support a campus.",
    href: "/contacts",
    action: "Explore contacts",
    detail: "Security · Health centre · Hostel wardens",
  },
  {
    n: "03",
    icon: MapPin,
    title: "Know where you are.",
    text: "Turn a sample location code into a building, floor, and landmark you can describe.",
    href: "/locations",
    action: "Find a location",
    detail: "Sample codes · Buildings · Landmarks",
  },
];
export default function Home() {
  return (
    <main id="main-content" className="home">
      <section className="hero container">
        <div className="hero-eyebrow">
          <span className="small-dot" /> CAMPUS SAFETY, ONE STEP AT A TIME
        </div>
        <div className="hero-grid">
          <h1>
            Find your
            <br />
            next step<span className="hero-period">.</span>
          </h1>
          <div className="hero-copy">
            <p>
              A familiar campus.
              <br />
              An unfamiliar situation.
            </p>
            <p>
              Practice what comes next with simple scenarios, sample contacts,
              and clearer location guidance.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/help">
                Practice a scenario
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
            <span className="hero-footnote">
              <ShieldCheck aria-hidden="true" /> A safe space to learn.
              Simulation only.
            </span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Built by students. For student awareness.</span>
          <a href="#explore" aria-label="Explore the prototype">
            <MoveDown aria-hidden="true" />
          </a>
          <span>NO SIGN-UP. JUST EXPLORATION.</span>
        </div>
      </section>
      <figure className="campus-photo">
        <div className="campus-photo-media">
          <Image
            src="/images/campus.jpg"
            alt="Students in graduation gowns tossing their caps outdoors with a city skyline in the distance; illustrative student photography."
            fill
            priority
            sizes="100vw"
          />
        </div>
        <figcaption>
          <span>
            A little more familiar.
            <br />A little more prepared.
          </span>
          <span>CAMPUSCUE / AWARENESS STARTS HERE</span>
        </figcaption>
      </figure>
      <section id="explore" className="container explore-section">
        <div className="section-intro">
          <Badge variant="outline">THREE WAYS TO PRACTICE</Badge>
          <h2>
            Clarity starts
            <br />
            with a little practice.
          </h2>
          <p>
            You don’t need to know everything.
            <br />
            Start by knowing where to look.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((f) => (
            <Card key={f.n} className="cinematic-card">
              <CardHeader>
                <div className="feature-top">
                  <f.icon aria-hidden="true" strokeWidth={1.3} />
                  <span>{f.n} /</span>
                </div>
                <CardTitle>
                  <h3>{f.title}</h3>
                </CardTitle>
                <CardDescription>{f.text}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{f.detail}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href={f.href}>
                    {f.action}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="container purpose-section">
        <Separator />
        <div className="purpose-grid">
          <div className="eyebrow">
            <BookOpen aria-hidden="true" /> MADE FOR LEARNING
          </div>
          <div>
            <h2>
              Preparedness is a practice.
              <br />
              Let’s make it approachable.
            </h2>
            <p>
              CampusCue is a student-built campus safety awareness prototype. It
              explores how clearer information can help students practice
              finding contacts and communicating locations through simulated
              scenarios.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">
                Meet the project
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
        <DemoNotice />
      </section>
    </main>
  );
}
