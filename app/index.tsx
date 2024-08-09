import { Image, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Icon, List, Searchbar, Text } from 'react-native-paper';
import { useAtom } from 'jotai';
import { searchAtom } from '@/atoms/search';
import { View, ScrollView, } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Genius } from '@/services/genius.service';
import { useDebounce } from 'use-debounce';

export default function HomeScreen() {
  const [search, setSearch] = useAtom(searchAtom);
  const [debouncedSearch] = useDebounce(search, 700);
  const songs = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: async () => await Genius.search(search),
    enabled: debouncedSearch.length > 0
  });
  console.log(songs);
  return (
    <ThemedView style={styles.pageContainer}>
      <View style={styles.titleContainer}>
        <Text variant="displaySmall" style={styles.title}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Song lyrics or title"
          onChangeText={setSearch}
          value={search}
        />
      </View>
      <ScrollView style={styles.searchResultsContainer}>
        {songs.isSuccess && songs.data?.songs.map((song, i) => (
          <List.Item
            key={i}
            title={song.title}
            description={song.artist_names + ""}
            left={props => <List.Image style={{ borderRadius: 10, marginStart: 10 }} source={{
              uri: song.header_image_thumbnail_url
            }} />}
          />
        ))}
        
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 100,
    padding: 20
  },
  title: {
    textAlign: "center"
  },
  searchContainer: {
    padding: 20
  },
  searchResultsContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 10
  }
});
