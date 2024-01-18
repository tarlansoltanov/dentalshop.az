const Copyright = () => {
  const website = "https://www.codeshift.az";
  const author = "CodeShift";

  return (
    <div id="copyright">
      <a href={website} target="_blank" title={author} rel="noopener">
        {author}
        <sup>®</sup>
      </a>{" "}
      tərəfindən hazırlanmışdır.
    </div>
  );
};

export default Copyright;
