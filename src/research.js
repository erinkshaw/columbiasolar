import { Container, Header, Image } from "semantic-ui-react";

// turn into a function that takes into the binded function that updates the
export function scopeFacts(onClickFunc) {
  return [
    {
      title: {
        content: (
          <Header as="h3" size="large" onClick={() => onClickFunc("fact", 0)} id="fact-0">
            <a>🌎 Pollute the environment?</a>
            <Header.Subheader>
              <p>
                No. Shepherd’s Run will improve the local environment by
                removing pesticides from the soil and water, decreasing erosion,
                and protecting forests and wetlands.
              </p>
            </Header.Subheader>
          </Header>
        ),
        // icon: 'play'
      },
      content: {
        content: (
          <Container>
            <p>
              Residents have raised concerns about the project’s environmental
              impact. Let’s examine each concern, keeping in mind that by law,
              New York State’s Department of Environmental Conservation won’t
              authorize the project unless Hecate can{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.documentcloud.org/documents/20514211-new-york-state-article-10-law#document/p8/a2022764"
              >
                prove it is minimizing harm
              </a>{" "}
              to the environment.
            </p>
            <p>
              🧪 &nbsp;&nbsp; <b>Fewer pesticides</b>: The farms at Shepherd’s
              Run currently use pesticides to grow corn, according to the
              landowners. Pesticides can be toxic to animals and{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2984095/#:~:text=Impact%20on%20environment,%2C%20and%20non%2Dtarget%20plants."
              >
                contaminate
              </a>{" "}
              the water and soil. These toxins will all be eliminated.
            </p>
            <p>
              🏜️ &nbsp;&nbsp;<b>Less soil erosion</b>: Native grasses, which
              Hecate{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.documentcloud.org/documents/20485438-hecate-energy-shepherds-run-solar-farm-open-house-12092020#document/p10/a2018882"
              >
                will plant
              </a>{" "}
              around the panels, can{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20489386-walston-et-al-modeling-the-ecosystem-services-of-native-vegetation-management-practices-at-solar-energy-facilities-in-the-midwestern-united-state#document/p2/a2019014"
              >
                reduce soil runoff by 95%
              </a>{" "}
              compared to farms. So Shepherd’s Run should significantly reduce
              the amount of runoff into Taghkanic Creek.
            </p>
            <p>
              ☢️ &nbsp;&nbsp;<b>No soil pollution</b>: The{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.8msolar.com/types-of-solar-panels"
              >
                crystalline silicon solar panels
              </a>{" "}
              at Shepherd’s Run are the same kind that go on your roof. They’re
              made of{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.documentcloud.org/documents/20577912-nc-clean-energy-health-and-safety-impacts-of-solar-photovoltaics#document/p4/a2026382"
              >
                glass, silicon, plastic, aluminum, copper and semiconductors
              </a>
              . All these materials are{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.documentcloud.org/documents/20488379-international-renewable-energy-agency-end-of-life-management-solar-photovoltaic-panels#document/p82/a2018881"
              >
                recyclable
              </a>
              . None of them are{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.documentcloud.org/documents/20577912-nc-clean-energy-health-and-safety-impacts-of-solar-photovoltaics#document/p6/a2026383"
              >
                toxic
              </a>
              . There’s no risk of the panels cracking open and contaminating
              people, animals, or soil.
            </p>
            <p>
              💧 &nbsp;&nbsp;<b>No water pollution</b>: Solar farms don’t leach
              materials, so Shepherd’s Run shouldn’t hurt the quality of
              Copake’s water. It will likely improve it, by reducing erosion and
              removing cow dung and corn pesticides.
            </p>
            <p>
              🚰 &nbsp;&nbsp;<b>Water table</b>: Native grassland can{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20489386-walston-et-al-modeling-the-ecosystem-services-of-native-vegetation-management-practices-at-solar-energy-facilities-in-the-midwestern-united-state#document/p6/a2019018"
              >
                retain 20% more water
              </a>{" "}
              than traditional agriculture, so the facility will help replenish
              Copake’s aquifer, an important benefit as the local climate warms.
            </p>
            <p>
              🌊 &nbsp;&nbsp;<b>Streams and wetlands protected</b>: The site
              contains streams and wetlands. To protect them, the solar panels
              will be placed{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20485438-hecate-energy-shepherds-run-solar-farm-open-house-12092020#document/p7/a2018883"
              >
                100 feet away
              </a>
              , as required by state law.
            </p>
            <p>
              🌳 &nbsp;&nbsp;<b>Forests protected</b>: Trees capture greenhouse
              gases, so clearing forests to make room for panels is bad for the
              climate as well as the community. Forests cover 45% of the
              Shepherd’s Run site. According to Hecate, a small number of
              trees that dot the farm may be removed, but none of the forest
              groves that surround it will be cleared. And new trees will be
              planted around the facility to protect views.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 1)} id="fact-1">
            <a>🚜 Eliminate farmland forever?</a>
            <Header.Subheader>
              <p>
                No. Shepherd’s Run will improve the farms’ soil, support the
                farmers, and may help conserve farmland for decades to come.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              Copake wants to preserve prime farmland, and has a{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20485435-town-of-copake-agricultural-and-farmland-protection-plan-part-1"
              >
                plan to do just that
              </a>
              . Although panels will replace the corn and cattle currently on
              those farms for a few decades, Shepherd’s Run will ultimately
              strengthen Copake’s farmland.
            </p>
            <br />
            <p>
              🌱 &nbsp;&nbsp;<b>Restored Soil</b> <br />
              Shepherd’s Run can make the land more “prime.” According to Bill
              Rasweiler, the biggest landowner supporting the project, the soil
              has been depleted by three decades of monocrop corn farming.
            </p>
            <p>
              Letting that soil rest, and planting native vegetation, will
              restore its{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20485428-culman-et-al-long-term-impacts-of-high-input-annual-cropping-and-unfertilized-perennial-grass-production-on-soil-properties-and-belowground-food-webs-in-kansas-usa#document/p9/a2018988"
              >
                nutrients and micro-organisms
              </a>
              . That will improve the soil’s quality and raise the land’s
              agricultural value.
            </p>
            <p>
              <Image
                size="large"
                src="https://codahosted.io/docs/HgV-_Qphpe/blobs/bl-IsoRJni4bp/17af706ea1de66683e6384573a38971abe5b8e5f938ce1567937b73d0ec9ec2fa029bc28d0e5539b34a7c6c629a95b74b7a7262d69c0162aa7f35c4d9ed9e85cade858485cebddd4b17627fb21ecf5aa94ecc2641bee86fd272ab4f088771ae366b1cbd6"
                alt=""
              ></Image>
              <i>
                The Conservationist LLC planted this 1.26 MW solar farm at the
                University of Dayton in Dayton, Ohio.
              </i>
            </p>
            <br />
            <p>
              👩‍🌾 &nbsp;&nbsp;<b>A lifeline for farmers</b>
              <br />
              To preserve farms, you need to support farmers. Unfortunately,
              farms in the Hudson Valley have been declining for decades.
            </p>
            <p>
              <iframe
                title="pubchart"
                width="600"
                height="371"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxjRhzetR1pTR2vorQx3ifb-lzPX3qbaoITMLVyNQKgmrZEagyJxdYZmfH_0kUHZOP1tPOXUH97YxL/pubchart?oid=1920960119&amp;format=interactive"
              ></iframe>
            </p>
            <p>
              To reverse this trend, farmers need new ways of making money.
              Solar farms are a great financial lifeline: they provide steady
              income and improve soil quality, which helps farmers stay in
              business for the long-term.
            </p>
            <p>
              In fact, Copake’s own Agricultural and Farmland Protection plan{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20485435-town-of-copake-agricultural-and-farmland-protection-plan-part-1#document/p29/a2018991"
              >
                explicitly encourages
              </a>{" "}
              farmers to adopt solar in order to preserve farmland.
            </p>
            <br />
            <p>
              🏡&nbsp;&nbsp;<b>Preventing real estate development for good</b>
              <br />
              Shepherd’s Farm could also ensure that the farmland is legally
              protected for good.
            </p>
            <p>
              Hecate is only{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="http://www.shepherdsrunsolar.com/local-benefits/"
              >
                leasing
              </a>
              &nbsp; the property from the farmers. They retain ownership of the
              land, and no permanent structures will be built on the property,
              so there’s nothing preventing the owners from going back to
              farming once the panels are gone.
            </p>
            <p>
              But there’s also nothing preventing them from using the land for{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://beta.documentcloud.org/documents/20508998-town-of-copake-zoning-table-of-land-use-regulations"
              >
                residential and even some commercial development
              </a>
              .
            </p>
            <p>
              Shepherd’s Run could change that. As part of the project, the
              owners could attach a &nbsp;
              <a
                rel="noreferrer"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Conservation_easement"
              >
                conservation easement
              </a>{" "}
              to the property. This would make it illegal to use the land for
              anything other than farming and clean energy, even if it gets
              sold.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 2)} id="fact-2">
            <a>🐦 Hurt birds?</a>
            <Header.Subheader>
              <p>
                No, Shepherd’s Run native plants will help birds and solar
                panels probably won’t hurt them.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              <Image
                size="medium"
                src="https://codahosted.io/docs/HgV-_Qphpe/blobs/bl-L8LkxJwTnM/99d9dd1bdba244033f02542abf0128816becf8eb180e44419597db8ac828344a1c63d1c06856766add992903c60b3ffc902121d5aa1ca9e611a8eaeaf70588ca90d689a7b500d0d7505533a55d444439e7658b99674a0565ea0dc29042156f02211ffbc4"
              ></Image>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.audubon.org/conservation/climate/solar"
              >
                Audubon
              </a>
            </p>
            <br />
            <p>
              🤕&nbsp;&nbsp;<strong>Can solar panels harm birds? </strong>
            </p>
            <p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Solar_power_tower#Environmental_concerns"
              >
                Solar towers
              </a>{" "}
              do harm birds, but that’s a totally different technology.{" "}
            </p>
            <p>
              Photovoltaic solar panels probably don’t. Based on experiences at a
              single solar farm in the water-poor Southwest,{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.documentcloud.org/documents/20489209-kosciuch-et-al-a-summary-of-bird-mortality-at-photovoltaic-utility-scale-solar-facilities-in-the-southwestern-us#document/p2/a2018981"
              >
                scientists proposed
              </a>{" "}
              that water-loving birds may mistake the panels for lakes and crash
              into them.{" "}
            </p>
            <p>
              However, this “lake effect” hypothesis has{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20489209-kosciuch-et-al-a-summary-of-bird-mortality-at-photovoltaic-utility-scale-solar-facilities-in-the-southwestern-us#document/p2/a2018981"
              >
                not been proven
              </a>
              . Anecdotal evidence from solar farms in the water-rich Northeast
              suggests little to no lake effect in the region. Though we won’t
              know for sure until more studies are done.
            </p>
            <br />
            <p>
              🐣&nbsp;&nbsp;<strong>Will the project help birds?</strong>
            </p>
            <p>Shepherd’s Run will help our avian friends in two ways:</p>
            <ol>
              <li>
                <p>
                  By housing native plants that{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://beta.documentcloud.org/documents/20485438-hecate-energy-shepherds-run-solar-farm-open-house-12092020#document/p11/a2018868"
                  >
                    support birds
                  </a>
                  , and keeping predators out, the solar farm will create a
                  sanctuary for them.
                </p>
              </li>
              <li>
                <p>
                  Two-thirds of American birds are{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.audubon.org/climate/survivalbydegrees"
                  >
                    facing extinction
                  </a>{" "}
                  from climate change. Large solar farms that take a real bite
                  out of the problem are essential for protecting them. That’s
                  why the National Audubon Society{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.audubon.org/news/solar-power-and-birds"
                  >
                    supports grid-scale solar
                  </a>
                  .
                </p>
              </li>
            </ol>
            <br />
            <p>
              🍃&nbsp;&nbsp;
              <strong>What about the nearby Audubon bird sanctuary?</strong>
            </p>
            <p>
              Solar panels likely don’t hurt birds, and the native plants around
              the panels will help them. This means Shepherd’s Run will likely
              support, rather than harm, the neighboring Rheinstrom Hill Audubon
              bird sanctuary.
            </p>
            <br />
            <p>
              🦅&nbsp;&nbsp;<strong>What about endangered species?</strong>
            </p>
            <p>
              Residents have also raised specific concerns about the following
              threatened or endangered birds of prey. Happily, they probably
              won’t be affected:
            </p>
            <ul>
              <li>
                <p>
                  Bald eagles{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.nwf.org/Educational-Resources/Wildlife-Guide/Birds/Bald-Eagle#:~:text=They%20prefer%20lakes%20and%20reservoirs,all%20types%20of%20water%20habitats."
                  >
                    nest
                  </a>{" "}
                  in cliffs and trees near large lakes, and eat mostly fish.
                  There's at least one pair nesting in Copake, but they depend on
                  bodies of water, not fields.
                </p>
              </li>
              <li>
                <p>
                  Peregrine falcons{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://guides.nynhp.org/peregrine-falcon/"
                  >
                    nest
                  </a>{" "}
                  on bridges, buildings, and cliffs — not in fields. They are
                  rarely seen in the Hudson Valley, as there are less than{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://guides.nynhp.org/peregrine-falcon/"
                  >
                    100 pairs
                  </a>{" "}
                  left in the state.
                </p>
              </li>
              <li>
                <p>
                  Northern Harriers{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://tpwd.texas.gov/huntwild/wild/species/harrier/"
                  >
                    nest
                  </a>
                  &nbsp; in prairies—which the corn fields have already
                  eliminated and the solar farm will partially restore—and in
                  wetlands—which the solar farm will preserve. Moreover, they
                  are{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.dec.ny.gov/animals/7090.html"
                  >
                    infrequently seen
                  </a>
                  &nbsp; in Columbia County because they usually breed farther
                  upstate.
                </p>
              </li>
            </ul>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 3)} id="fact-3">
            <a>🦝 Hurt animals?</a>
            <Header.Subheader>
              <p>No, they’ll just need to go around the fenced-in areas.</p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              Hecate initially considered allowing foxes, raccoons, and other
              small animals to pass through the property by putting holes in the
              fence.
            </p>
            <p>
              However, to avoid the liability of people running around between
              the panels, Hecate is required to fully fence in the solar farm.
              Small animals — as well as deer, bears, and other large animals —
              will need to go around the fence.
            </p>
            <p>
              Local animals already have to do this with the Copake Agricultural
              Center’s{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.nefarmaccess.org/the-ag-center-model/project-five-5hher"
              >
                192 fenced-in acres
              </a>{" "}
              in the middle of town, or the{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.nurserydirect.com/growers/growers.html?growerid=14"
              >
                800 fenced-in acres
              </a>{" "}
              at the Shagbark tree farm. However, the 360-acre project will be
              split into four separate enclosures, each of which will be smaller
              than those properties.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 4)} id="fact-4">
            <a>🔌 Send all the power to NYC?</a>
            <Header.Subheader>
              <p>
                No. Other counties currently send us most of our power.
                Shepherd’s Run will allow us to be self-sufficient.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              On the contrary. Right now, we get around{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1qtw5G3kuebIgT5yb49TUsAQXfJMZIwxXqrZiWDonzzI/edit?usp=sharing"
              >
                85% of our electricity
              </a>{" "}
              from neighboring counties! If we produce our own power, the vast
              majority of it will stay in the county.
            </p>
            <p>
              Why is that? Because power flows to the closest place it’s needed.
              Our community needs a lot of electricity, but produces very
              little. So any new power produced here would stay here, satisfying
              our electricity needs and replacing what we take from others.
            </p>
            <p>
              It would only go elsewhere when we have more power than we need.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 5)} id="fact-5">
            <a>👁️ Be an eyesore?</a>
            <Header.Subheader>
              <p>
                We don’t know the visual impact yet, but Hecate is taking steps
                to minimize it.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              Hecate has{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.documentcloud.org/documents/20485438-hecate-energy-shepherds-run-solar-farm-open-house-12092020#document/p18/a2022763"
              >
                committed
              </a>{" "}
              to minimizing the impact on views as much as possible. To that
              end, they are currently surveying the area to figure out where to
              add trees and where to remove panels.
            </p>
            <p>
              They are planning an open house in April 2021 to present and
              visualize this new design. We’ll know much more about the visual
              impacts then.
            </p>
            <p>
              Nevertheless, it’s useful to keep things in perspective: only{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com/search?q=280+acres+in+square+miles&oq=280+acres+in+square+miles&aqs=chrome.0.69i59.5655j0j7&sourceid=chrome&ie=UTF-8"
              >
                .44
              </a>{" "}
              of Copake’s{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Copake,_New_York#cite_note-CenPopGazetteer2016-1"
              >
                42.02 square miles
              </a>{" "}
              will be covered in panels. That's just 1% of our town.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 6)} id="fact-6">
            <a>🥾 Drive away tourists?</a>
            <Header.Subheader>
              <p>
                Probably not. The panels won't be visible from tourist
                destinations.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              You can’t see the panels at all from Taconic State Park or the
              Catamount Ski resort, where most tourists go. Or from Hillsdale,
              Copake, Copake Lake, Copake Falls, or West Copake. So many
              tourists won’t see the panels at all.
            </p>
            <p>
              Most tourists that <i>do</i> see the panels will only glimpse them
              on Route 23, because the solar farm will be largely obscured by
              existing buildings in Craryville, existing tree buffers, and new
              trees added as necessary.
            </p>
            <p>
              Of course, some tourists will drive or bike through Center Hill
              Road and Route 7, but this will be a small fraction of those who
              visit us.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 7)} id="fact-7">
            <a>🏠 Hurt home values?</a>
            <Header.Subheader>
              <p>
                Not for most people, unless the property can see the panels.
                Even then, probably by 2%, at most.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              The reality is that very little academic research has been done on
              the impact of solar farms on property values.* But here’s what we
              do know.
            </p>
            <br />
            <p>
              📝 &nbsp;&nbsp;
              <b>Findings: no impact on home sales in rural areas</b>
            </p>
            <p>
              The only{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.documentcloud.org/documents/20514174-gaur-lang-property-value-impact-of-commercial-scale-solar-energy-in-massachusetts-and-rhode-island"
              >
                good academic study
              </a>{" "}
              (Gaur & Lang, 2020) we could find measures the impact of 204 solar
              farms in Massachusetts and Rhode Island on 400k home sales. The
              conclusion:
            </p>
            <p>
              <em>
                “Results suggest that houses within one mile depreciate 1.7%
                following construction of a solar array.” (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.documentcloud.org/documents/20514174-gaur-lang-property-value-impact-of-commercial-scale-solar-energy-in-massachusetts-and-rhode-island#document/p2/a2022756"
                >
                  p. 2
                </a>
                )
              </em>
            </p>
            <p>
              Those results are for the <i>entire</i> state, however, both rural
              and urban areas. The impact is different in the countryside:
            </p>
            <p>
              <em>
                “These results suggest that the treatment effect in rural areas
                is &nbsp;
                <b>effectively zero</b> (a statistically insignificant 0.1%),
                and that the negative externalities of solar arrays are only
                occurring in non-rural areas. These findings go against our
                intuition.” (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.documentcloud.org/documents/20514174-gaur-lang-property-value-impact-of-commercial-scale-solar-energy-in-massachusetts-and-rhode-island#document/p17/a2022757"
                >
                  p. 17
                </a>
                )
              </em>
            </p>
            <p>
              So at least in Massachusetts and Rhode Island, solar projects in
              rural areas like ours have <b>no discernible impact</b> on home
              values.
            </p>
            <br />
            <p>
              😱 &nbsp;&nbsp;<b>Worst-case scenario</b>
            </p>
            <p>
              But let’s assume a worst-case scenario and see what happens. Homes
              within a mile of Shepherd’s Run—more likely, the few dozen homes
              that view the solar farm or are right next to it—could lose up
              to 2% of their value.
            </p>
            <p>
              This isn’t ideal. Understandably, nobody wants their property
              value to go down.
            </p>
            <p>
              But thankfully, it shouldn’t jeopardize anyone’s finances either.
              If your home is worth $250K, and the property value goes down by
              2%, it would still be worth $245K.
            </p>
            <br />
            <p>
              📈 &nbsp;&nbsp;<b>Copake real estate is booming</b>
            </p>
            <p>
              <Image
                src="https://codahosted.io/docs/HgV-_Qphpe/blobs/bl-iZmqENvCEg/c49dfc3175aea7a233b847d379185f29a83a27d047854411ff88d0c60368712f092b75ebb3d741665f04bd6b868b1479fbc11756083e34d8a71d72b2a80e7d945bbcffa3d8ca4251368c15c837c09eb643a1a65411a7b90da7ddff974d99d8a93f09259f"
                alt=""
              ></Image>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.realtor.com/realestateandhomes-search/Columbia-County_NY/overview"
              >
                Realtor.com
              </a>
            </p>
            <p>
              Moreover, this 2% drop is tiny compared to the 30% jump in home
              values we’ve seen in Columbia County since the start of the
              pandemic (Feb. 2020-Feb. 2021).
            </p>
            <p>
              So that $250K home is now probably worth $325K. And it'll probably
              keep appreciating: interest in our area will continue to grow if
              many people keep working remotely after the pandemic.
            </p>
            <p>
              <i>
                * We found only{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.documentcloud.org/documents/20514174-gaur-lang-property-value-impact-of-commercial-scale-solar-energy-in-massachusetts-and-rhode-island"
                >
                  one study
                </a>{" "}
                by economists that actually measured the impact of solar farms
                on nearby home sales. The study used real data on 419,000 home
                sales, and used statistical models to compare the prices of
                homes near solar farms with those of similar homes elsewhere.
                This is the gold standard for quantifying the effect of
                disamenities on property values.
              </i>
            </p>
            <p>
              <i>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.southripleysolar.com/wp-content/uploads/2020/09/Kirkland-Grandy-Solar-Impact-Study.pdf"
                >
                  All
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.oglecounty.org/document_center/planning%20&%20zoning/Solar%20Ad%20Hoc%20Committee/PV%20Impact%20Studies/CR%20-%20SunVest%20Solar%20-%20Solar%20Farm%20Impact%20Study%20(Report%20Date%205-30-2018).pdf"
                >
                  &nbsp;other
                </a>{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.innergex.com/wp-content/uploads/2020/05/CohnReznick-Proposed-Paeahu-Solar-Property-Value-Impact-Study_Draft_May-2020.pdf"
                >
                  studies
                </a>{" "}
                ask a handful of property assessors for their opinion, and most
                are funded by the solar industry. One{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.documentcloud.org/documents/20514190-rai-et-al-an-exploration-of-property-value-impacts-near-utility-scale-solar-installations"
                >
                  often-cited study
                </a>{" "}
                from the LBJ School of Public Affairs isn't a published and peer-reviewed academic article at all.
                It's a &nbsp;
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://energy.utexas.edu/news/students-examine-solar-market-trends-lbj-school-policy-research-project"
                >
                  group project
                </a>
                &nbsp;from some students.
                The paper relies on surveys from{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.documentcloud.org/documents/20514190-rai-et-al-an-exploration-of-property-value-impacts-near-utility-scale-solar-installations#document/p13/a2022758"
                >
                  just 37 assessors
                </a>
                . This is a tiny sample. To answer this question, you need to
                analyze hard data on thousands of home sales, not ask
                couple dozen assessors for their subjective opinion.
              </i>
            </p>
            <p>
              <i>
                Despite those flaws, the study concludes: “Results from our
                survey of home assessors show that the majority of respondents
                believe that proximity to a solar installation either had no
                impact or positive impact on home values." (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.documentcloud.org/documents/20514190-rai-et-al-an-exploration-of-property-value-impacts-near-utility-scale-solar-installations#document/p13/a2022758"
                >
                  p. 23
                </a>
                )
              </i>
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 8)} id="fact-8">
            <a>🔥 Create fires our firefighters can’t handle?</a>
            <Header.Subheader>
              <p>
                No. Solar panel fires are extremely rare, and the project will
                significantly boost fire department funding.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              Solar panels{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://pv-magazine-usa.com/2019/08/22/there-are-solar-power-fires-per-year/"
              >
                very rarely start fires
              </a>
              . We know this because, even though the U.S. doesn’t track solar
              panel fires, other countries do: In the past 20 years, only{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20509670-fraunhofer-recent-facts-about-photovoltaics-in-germany#document/p84/a2021887"
              >
                120 of Germany’s 2 million
              </a>{" "}
              solar installations started a fire. In Japan, only{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://pv-magazine-usa.com/2019/08/22/there-are-solar-power-fires-per-year/"
              >
                127 of 2.4 million
              </a>{" "}
              did. That’s only .006% of all solar systems.
            </p>
            <p>
              Moreover, Hecate is required to pay special district property
              taxes to the fire department. So the fire department will actually
              get a significant funding boost in exchange for a minuscule
              increase in fire risk.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large"  onClick={() => onClickFunc("fact", 9)} id="fact-9">
            <a>⚖️ Break the law?</a>
            <Header.Subheader>
              <p>
                No. The project is legal under state law, even if local zoning
                disagrees.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              In New York State, if you want to build a solar farm less than
              25MW, the town alone{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20509723-nyserda-seqr-for-large-scale-solar#document/p11/a2021910"
              >
                can approve or deny
              </a>{" "}
              the project. If it’s greater than 25MW, however, a state siting
              board—made up of 5 state appointees and 2 local ones—{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.nyserda.ny.gov/All-Programs/Programs/Clean-Energy-Siting/Siting-for-Large-Scale-Renewables"
              >
                must approve it
              </a>
              .
            </p>
            <p>
              Shepherd’s Run is 60MW, so Hecate has no option but to go through
              the state-level{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="http://blogs.law.columbia.edu/climatechange/2011/06/28/the-power-new-york-act-of-2011-reauthorizes-and-modernizes-article-x-of-the-public-service-law/"
              >
                article 10 siting process
              </a>{" "}
              (or the new 94C process). They can negotiate with the Town of
              Copake, but ultimately the siting board still has to approve.
            </p>
            <p>
              If the board approves the project—which requires complying with
              extensive environmental and economic regulations—then Hecate is
              legally authorized to build.
            </p>
            <p>
              At that point, Shepherd’s Run is legal even though it doesn’t
              comply with local zoning rules, because{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beta.documentcloud.org/documents/20485437-nys-article-10-regulations#document/p95/a2021904"
              >
                state law can supersede local law
              </a>{" "}
              in New York when it comes to solar farm siting.
            </p>
          </Container>
        ),
      },
    },
  ];
}

export function scopeReasons(onClickFunc) {
  return [
    {
      title: {
        content: (
          <Header as="h3" size="large" onClick={() => onClickFunc("reason", 0)} id="reason-0">
            <a>🏠 Put solar panels on roofs?</a>
            <Header.Subheader>
              <p>We need to do that too, but it’s not enough.</p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              Widespread rooftop solar is necessary, but insufficient, to stay
              under 2 degrees Celsius of warming and avoid irreversible
              catastrophe.
            </p>
            <p>
              We need to build around{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://youtu.be/OUpgDsfYhec?t=921"
              >
                360 square miles
              </a>{" "}
              of solar in the next 15 to 20 years to reach 100% clean energy in
              New York State, according to solar power expert Dr. Richard Perez
              of SUNY Albany. If we put panels on half of all buildings and
              parking lots in the state, that would amount to only 160 square
              miles. That’s not even halfway to 360.
            </p>
            <p>
              And even that goal seems unrealistic, because it would require
              convincing every other New Yorker who owns property to install
              rooftop panels in the next 15 years.
            </p>
            <p>
              Rooftop solar is great, and we need as much of it as possible. But
              it’s not enough to solve the climate crisis.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large" onClick={() => onClickFunc("reason", 1)} id="reason-1">
            <a>🏭 Okay, so we need a solar farm. But can’t we put it on a landfill,
            parking lot, or industrial site?</a>
            <Header.Subheader>
              <p>
                These projects are often too expensive to compete with fossil
                fuels, and there aren’t nearly enough brownfields in the state.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              This is a great idea, but there are two problems: cost and space.
            </p>
            <br />
            <p>
              💸 &nbsp;&nbsp;<b>Brownfield solar is expensive</b>
            </p>
            <p>
              First, to build the massive amount of solar we need, it needs to
              be cheaper than natural gas, the fossil fuel that generates 30% of
              New York’s electricity. Otherwise, solar developers can’t compete,
              and projects won’t get built.
            </p>
            <p>
              And there’s the rub. Building on a brownfield is much more
              expensive than building on farmland:
            </p>
            <ul>
              <li>
                <p>
                  Landfills can be up to{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.solarpowerworldonline.com/2019/07/how-does-solar-on-capped-landfills-work/"
                  >
                    20% more expensive
                  </a>{" "}
                  to build on, because the ground is unstable and full of
                  greenhouse gases.
                </p>
              </li>
              <li>
                <p>
                  Solar parking lots are a clever use of space, but because of
                  their complicated construction, they produce electricity
                  that’s{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://solarbuildermag.com/featured/solar-carport-installation-construction-best-practices/"
                  >
                    4-8x
                  </a>{" "}
                  more expensive than utility-scale solar.
                </p>
              </li>
              <li>
                <p>
                  Industrial sites have to be cleared of above-ground structures
                  and require specialized panels that don’t penetrate the ground
                  to avoid disturbing below-ground contaminants. Every site is
                  different, which also adds to cost.
                </p>
              </li>
            </ul>
            <br />
            <p>
              🚧 &nbsp;&nbsp;<b>There aren’t nearly enough brownfields</b>
            </p>
            <p>
              All of this drives up the price and can make brownfield solar more
              expensive than natural gas, which is a deal-breaker. But even if
              it was cheap, there aren’t anywhere close to enough brownfields
              out there.
            </p>
            <p>
              There are{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://youtu.be/OUpgDsfYhec?t=1408"
              >
                24 square miles
              </a>{" "}
              of parking lots in New York, and{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://youtu.be/OUpgDsfYhec?t=1394"
              >
                29 square miles
              </a>{" "}
              of landfills and industrial areas. That’s only <b>15%</b> of the{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://youtu.be/OUpgDsfYhec?t=921"
              >
                360 square miles
              </a>{" "}
              of solar we need to build in the next 15 to 20 years.
            </p>
            <p>
              So while brownfield projects are worth exploring, they
              unfortunately cannot substitute for rural solar farms.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large" onClick={() => onClickFunc("reason", 2)} id="reason-2">
            <a>📍So it has to be on a greenfield, but why does it have to be in
            Craryville?</a>
            <Header.Subheader>
              <p>
                To connect to the electric grid through Craryville’s substation.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              To hook into the grid, solar farms need to connect to a
              substation. Substations are often in towns, so finding one by
              farmland and with interested landowners isn’t so simple. The
              Craryville substation has both.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large" onClick={() => onClickFunc("reason", 3)} id="reason-3">
            <a>🖼️ Maybe it has to be near Craryville, but why not tuck it over a
            hill, out of sight?</a>
            <Header.Subheader>
              <p>
                This also makes the project too expensive to compete with fossil
                fuels.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              Another excellent idea! But if we’re serious about fighting
              climate change, we need to be concerned about the cost of solar
              projects.
            </p>
            <p>
              The further we place the solar farm from the substation, the more
              transmission line we need to run. Not only is this unsightly, it’s
              surprisingly expensive: from{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.transmissionhub.com/articles/2012/10/wecc-report-building-transmission-in-the-west-costs-1m-to-3m-mile.html"
              >
                $1 million to $3 million per mile
              </a>
              .
            </p>
            <p>
              So the project needs to be close to the Craryville substation or
              the project doesn’t make sense financially, and we’ll end up with
              more fossil fuel power plants.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large" onClick={() => onClickFunc("reason", 4)} id="reason-4">
            <a>🤏 Fine, it has to be there. Why can’t it be smaller?</a>
            <Header.Subheader>
              <p>
                It can be, and has already been cut down! But it can’t be 10
                acres, or we won’t make a dent on climate change.
              </p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              In response to community concerns, Hecate has already cut the
              project down by nearly 50%, from 500 acres to 255 acres, of which{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="http://www.shepherdsrunsolar.com/assets/img/openhouseapril/Board7.jpg"
              >
                only 80 acres
              </a>{" "}
              will be covered in panels.
            </p>
            <p>
              But Shepherd’s Runs still needs to be hundreds of acres, not
              dozens. For two reasons: cost and scale.
            </p>
            <p>
              <b>💰&nbsp;&nbsp; Small solar can't beat fossil fuels</b>
            </p>
            <p>
              The smaller the project is, the more expensive the electricity it
              produces. Utility-scale solar projects are cheaper than natural
              gas plants, but 10 acre community solar projects{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.lazard.com/perspective/levelized-cost-of-energy-and-levelized-cost-of-storage-2020/"
              >
                are more expensive
              </a>
              .
            </p>
            <p>
              <b>💯 &nbsp;&nbsp;The state needs hundreds of Shepherd’s Runs</b>
            </p>
            <p>
              At first glance, the idea that Shepherd’s Run is “too big” for
              Copake makes a lot of sense: “we’re a small town, the solar farms
              should be small too!”
            </p>
            <p>
              But consider this. Shepherd’s Run has .44 square miles of panels.
              We need build{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://youtu.be/OUpgDsfYhec?t=921"
              >
                360 square miles
              </a>{" "}
              of solar in the next two decades.
            </p>
            <p>
              If we put half the panels in cities, and half in the country, we’d
              still need to uild <b>411</b> solar farms the size of Shepherd’s
              Run to get the job done. <b>44%</b> of New York’s 932 towns would
              have a big solar farms!
            </p>
            <p>
              That’s already a huge undertaking. But if the solar farms all have
              to be 10 acres, the maximum size Copake allows per lot, we’ll need
              to build 11,520! Each town would end up with 12 farms. And because
              of all the regulations solar farms need to satisfy, all projects
              take years to get approval, even small ones. There isn’t enough
              time to blanket the New York in 10 acre projects.
            </p>
            <p>
              So Shepherd’s Run isn’t actually too big. It’s just right. If
              you’re serious about fighting climate change, this is what a real
              climate solution looks like.
            </p>
          </Container>
        ),
      },
    },
    {
      title: {
        content: (
          <Header as="h3" size="large" onClick={() => onClickFunc("reason", 5)} id="reason-5">
            <a>🔨 If we can’t shrink it, can we break it up and scatter it around?</a>
            <Header.Subheader>
              <p>Small + Far = Too Expensive = More Fossil Fuels</p>
            </Header.Subheader>
          </Header>
        ),
      },
      content: {
        content: (
          <Container>
            <p>
              That would be an elegant solution! But unfortunately, we run into
              right into the last two problems we encountered: Small projects
              far from substations are too expensive to beat fossil fuels.
            </p>
          </Container>
        ),
      },
    },
  ];
}
