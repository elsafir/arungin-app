import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di <Text style={styles.brand}>Arungin</Text></Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlineButton} onPress={() => router.push('/register')}>
        <Text style={styles.outlineButtonText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, textAlign: 'center', marginBottom: 30 },
  brand: { fontWeight: 'bold', color: '#0066ff' },
  button: { backgroundColor: '#0066ff', padding: 15, borderRadius: 8, marginBottom: 10, width: '80%' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  outlineButton: { borderColor: '#0066ff', borderWidth: 2, padding: 15, borderRadius: 8, width: '80%' },
  outlineButtonText: { color: '#0066ff', textAlign: 'center', fontWeight: 'bold' },
});
