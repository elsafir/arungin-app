import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat datang di dashboard!</Text>

      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>Pesan Ojek</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>Live Tracking Driver</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>Riwayat Perjalanan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>Rating & Ulasan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  menuButton: { backgroundColor: '#f2f2f2', padding: 16, borderRadius: 10, marginBottom: 15 },
  menuText: { fontSize: 16, color: '#333', fontWeight: '600' },
});
