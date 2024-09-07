export const useUtils = () => {
  const { version } = useWebApp();
  const checkSupportVersionBackButton = computed(() => Number(version) >= 6.1);

  return { checkSupportVersionBackButton };
};
