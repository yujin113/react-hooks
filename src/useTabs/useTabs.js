export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  // 현재 선택한 content의 index 얻기
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
