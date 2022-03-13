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
        <div className={s.twitterContainer}>
          <div className={`${u.flex} ${u.ma4}`}>
            <span>
              <TwitterLogo />
            </span>
            <div className={u.w100}>
              <span className={s.socialOgTitle}>Ghost</span>
              <span className={s.socialOgTime}>12 hrs</span>
              <div className={`${u.flex} ${s.flexColumn} ${u.mt2} ${u.mb3}`}>
                <span className={`${s.socialOgDesc} ${u.w100} ${u.mb2}`}></span>
                <span className={`${s.socialOgDesc} ${u.w60}`}></span>
              </div>
              <div className={s.socialTwitterPostPreview}>
                <div
                  className={s.socialTwitterPreviewImage}
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1647119126202-d13a4263d40c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTY0NzE4Nzc1Mg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000')"
                  }}
                ></div>
                <div className={s.socialTwitterPreviewContent}>
                  <div className={s.socialTwitterPreviewTitle}>
                    Customizing your brand and design settings - Coast
                  </div>
                  <div className={s.socialTwitterPreviewDesc}>How to tweak a few settings in Ghost to transform your site from a generic template to a custom brand with style and personality.</div>
                  <div className={s.socialTwitterPreviewMeta}>
                    <LinkIcon />
                    https://coast.blog/design
                  </div>
                </div>
              </div>
              <div className={s.socialTwitterReactions}>
                <div className={`${u.flex} ${s.itemsCenter}`}>
                  <CommentIcon />
                  2
                </div>
                <div className={`${u.flex} ${s.itemsCenter}`}>
                  <RetweetIcon />
                  11
                </div>
                <div className={`${u.flex} ${s.itemsCenter}`}>
                  <LikeIcon />
                  32
                </div>
                <div className={`${u.flex} ${s.itemsCenter}`}>
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
