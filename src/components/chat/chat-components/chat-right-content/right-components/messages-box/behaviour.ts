const getLastElementIntersectionPercent = (lastElement: Element) => {
  const messagesContainer = document.querySelector(".messages-box");
  const options = {
    root: messagesContainer,
    rootMargin: "0px",
    threshold: 1.0,
  };
  return new Promise<number>((resolve) => {
    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      observer.disconnect();
      resolve(entries[0].intersectionRatio);
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(lastElement);
  });
};

const detectIfNearLatestMessage = async (lastElement: Element) => {
  const lastElementIntersectionPercent =
    await getLastElementIntersectionPercent(lastElement);
    
  return lastElementIntersectionPercent > 0;
};

export const scrollNewMessage = async () => {
  const allMessageElements = document.querySelectorAll(".messages-box > div");
  const lastElement = allMessageElements[allMessageElements.length - 2];

  if (await detectIfNearLatestMessage(lastElement)) {
    lastElement?.scrollIntoView({
      behavior: "smooth",
    });
  }
};
