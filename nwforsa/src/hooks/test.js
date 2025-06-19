import { renderHook, act } from '@testing-library/react-hooks';
import useCachedResources from './useCachedResources';

describe('useCachedResources', () => {
  it('should eventually set isLoadingComplete to true', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCachedResources());
    // Wait for the hook to finish loading resources
    await waitForNextUpdate();
    expect(result.current.isLoadingComplete).toBe(true);
  });
});

const { isLoadingComplete } = useCachedResources();

if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <SafeAreaView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <NetworkProvider>
              <RootModal modalVisible={isJailBroken} />
              <UpdateModal />
              <LocationAccssModal />
              <AppConfig hidden={true} />
              <WebKeysRoute />
              {/* <Notification isToken={true} /> */}
            </NetworkProvider>
          </QueryClientProvider>
        </SafeAreaView>
        <FlashMessage position="bottom" />
      </View>
    );