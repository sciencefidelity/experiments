import React, { FC } from "react"
import Layout from "components/Layout"
import {
  CommentIcon,
  LikeIcon,
  LinkIcon,
  RetweetIcon,
  ShareIcon,
  TwitterLogo
} from "components/TwitterIcons"
import s from "styles/Twitter.module.scss"
import u from "styles/Utils.module.scss"

const Twitter: FC = () => {
  return (
    <Layout>
      <div>
        <div className="twitter-container">
          <div className="flex ma4">
            <span>
              <TwitterLogo />
            </span>
            <div className="w-100">
              <span className="social-og-title">Ghost</span>
              <span className="social-og-time">12 hrs</span>
              <div className="flex flex-column mt2 mb3">
                <span className="social-og-desc w-100 mb2"></span>
                <span className="social-og-desc w-60"></span>
              </div>
              <div className="social-twitter-post-preview">
                <div
                  className="social-twitter-preview-image"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1647119126202-d13a4263d40c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTY0NzE4Nzc1Mg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000')"
                  }}
                ></div>
                <div className="social-twitter-preview-content">
                  <div className="social-twitter-preview-title">
                    Customizing your brand and design settings - Coast
                  </div>
                  <div className="social-twitter-preview-desc">How to tweak a few settings in Ghost to transform your site from a generic template to a custom brand with style and personality.</div>
                  <div className="social-twitter-preview-meta">
                    <LinkIcon />
                    https://coast.blog/design
                  </div>
                </div>
              </div>
              <div className="social-twitter-reactions">
                <div className="flex items-center">
                  <CommentIcon />
                  2
                </div>
                <div className="flex items-center">
                  <RetweetIcon />
                  11
                </div>
                <div className="flex items-center">
                  <LikeIcon />
                  32
                </div>
                <div className="flex items-center">
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Twitter
