/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            strava
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.webp"
        width={150}
        height={150}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>
          <br />
          <div style={{ marginTop: "5px" }}>
            Always learning and striving to build useful things. My best ideas
            often strike during a run. Connect with me on{" "}
            <a
              target="_blank"
              href={`https://github.com/${social?.github || ``}`}
            >
              github
            </a>
            ,{" "}
            <a
              target="_blank"
              href={`https://strava.com/${social?.strava || ``}`}
            >
              strava
            </a>
            , or{" "}
            <a
              target="_blank"
              href={`https://twitter.com/${social?.twitter || ``}`}
            >
              twitter
            </a>
            !
          </div>
        </p>
      )}
    </div>
  )
}

export default Bio
