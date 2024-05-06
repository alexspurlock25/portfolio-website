const work = {
  sumofme: {
    title: "sumofme",
    summary: "A native iOS and full-stack web application designed to streamline resume sharing for convention and event goers by using QR codes! Get it on the App Store!",
    innerHTML: `<a target="_blank" href="https://apps.apple.com/us/app/sumofme/id6479970257?itsct=apps_box_badge&amp;itscg=30200"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1714348800" alt="Download on the App Store" style="border-radius: 13px; margin:6%;width:88%"></a>`
  },
  campusEvents: {
    title: "Campus Events",
    summary: "A native Android application tailored for University of Cincinnati students, offering a streamlined approach to discovering events hosted by college student groups. With a user-friendly interface and efficient navigation, Campus Events provides students with an easier way to explore upcoming events compared to existing platforms.",
    innerHTML: `<a target="_blank" href='https://play.google.com/store/apps/details?id=com.alexanderspurlock.campusevents&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>`
  }
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am constantly working on brand new ideas so don't forget to come back 😁
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        {
          Object.entries(work).map(([project, { title, summary, innerHTML }]) => {
            return (
              <div className="my-10 border-b">
                <h1>{title}</h1>
                <div>
                  {summary}
                </div>
                <div style={{ width: 300 }} dangerouslySetInnerHTML={{ __html: innerHTML}}></div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}
