import React, { FC } from "react"
import Layout from "components/Layout"
import { FacebookLogo, HeartIcon, ThumbIcon } from "components/FacebookIcons"
import s from "styles/Facebook.module.scss"
import u from "styles/Utils.module.scss"

const Facebook: FC = () => {
  return (
    <Layout>
      <div className={s.ogContainer}>
        <div className={`${u.flex} ${u.ma3} ${u.mb2}`}>
          <span>
            <FacebookLogo />
          </span>
          <div>
            <div className={s.socialOgTitle}>Ghost</div>
            <div className={s.socialOgTime}>12 hrs</div>
          </div>
        </div>
        <div className={`${u.flex} ${u.flexColumn} ${u.ma3} ${u.mt2}`}>
          <span className={`${s.socialOgDesc} ${u.w100} ${u.mb2}`}></span>
          <span className={`${s.socialOgDesc} ${u.w60}`}></span>
        </div>
        <div className={s.socialOgPreview}>
          <div
            className={s.socialOgPreviewImage}
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1647164926512-2cca88470829?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTY0NzE4Nzc1Mg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000')"
            }}
          ></div>
          <div className={s.socialOgPreviewBookmark}>
            <div className={s.socialOgPreviewContent}>
              <div className={s.socialOgPreviewMeta}>coast.blog</div>
              <div className={s.socialOgPreviewTitle}>Customizing your brand and design settings - Coast</div>
              <div className={s.socialOgPreviewDesc}>How to tweak a few settings in Ghost to transform your site from a generic template to a custom brand with style and personality.</div>
            </div>
          </div>
        </div>
        <div className={s.socialOgReactions}>
          <span className={s.socialOgLikes}>
            <ThumbIcon />
            <HeartIcon />
            182
          </span>
          <span className={s.socialOgComments}>7 comments</span>
          <span className={`${s.socialOgComments} ${u.ml2}`}>2 shares</span>
        </div>
      </div>
    </Layout>
  )
}
export default Facebook
