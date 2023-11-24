const Announcement = ({ post, className }) => {
  const { locale } = useGlobal()
  if (post?.blockMap) {
    return <div className={`${className} fixed top-0 w-full z-50`}>
        <section id='announcement-wrapper' className="dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray">
            <div><i className='mr-2 fas fa-bullhorn' />{locale.COMMON.ANNOUNCEMENT}</div>
            {post && (<div id="announcement-content">
            <NotionPage post={post} className='text-center' />
        </div>)}
        </section>
    </div>
  } else {
    return <></>
  }
}
export default Announcement
