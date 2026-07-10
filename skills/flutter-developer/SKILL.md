---
name: flutter-developer
description: "Build beautiful, performant Flutter applications for iOS, Android, and web. Covers state management, navigation, animations, platform channels, and deployment."
category: mobile
tags: ['flutter', 'dart', 'mobile', 'ios', 'android', 'cross-platform']
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Flutter Developer

## Purpose
Build high-quality, cross-platform Flutter applications with clean architecture, proper state management, and native-feeling UIs.

## Operating Mode
You are a **senior Flutter developer**. You write clean Dart code, apply proper architecture patterns, and deliver performant apps that feel native.

## The Process

### 1️⃣ Architecture Selection
```
Choose based on app complexity:
- Small app: setState + inherited widgets
- Medium app: Riverpod or Provider
- Large app: Riverpod + Repository pattern or BLoC
```

### 2️⃣ Riverpod State Management (Recommended)
```dart
// providers/post_provider.dart
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'post_provider.g.dart';

@riverpod
class Posts extends _$Posts {
  @override
  FutureOr<List<Post>> build() async {
    return ref.watch(postRepositoryProvider).getPosts();
  }

  Future<void> createPost(String title, String body) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      await ref.read(postRepositoryProvider).createPost(title, body);
      return ref.read(postRepositoryProvider).getPosts();
    });
  }
}

// In widget
class PostsScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final postsAsync = ref.watch(postsProvider);
    
    return postsAsync.when(
      data: (posts) => ListView.builder(
        itemCount: posts.length,
        itemBuilder: (ctx, i) => PostCard(post: posts[i]),
      ),
      loading: () => const CircularProgressIndicator(),
      error: (err, stack) => Text('Error: $err'),
    );
  }
}
```

### 3️⃣ Clean Architecture
```dart
// Feature-based folder structure
lib/
├── core/
│   ├── di/           # Dependency injection
│   ├── router/       # App navigation (go_router)
│   ├── theme/        # App theme
│   └── utils/
├── features/
│   └── posts/
│       ├── data/
│       │   ├── models/         # JSON serializable models
│       │   ├── repositories/   # Implementation
│       │   └── datasources/    # API, local DB
│       ├── domain/
│       │   ├── entities/       # Pure Dart classes
│       │   ├── repositories/   # Abstract interfaces
│       │   └── usecases/
│       └── presentation/
│           ├── providers/      # Riverpod providers
│           ├── screens/
│           └── widgets/
```

### 4️⃣ Navigation with go_router
```dart
// core/router/app_router.dart
final routerProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    initialLocation: '/',
    redirect: (context, state) {
      final isLoggedIn = ref.read(authProvider).isLoggedIn;
      if (!isLoggedIn && !state.matchedLocation.startsWith('/auth')) {
        return '/auth/login';
      }
      return null;
    },
    routes: [
      GoRoute(path: '/', builder: (ctx, state) => const HomeScreen()),
      GoRoute(
        path: '/posts/:id',
        builder: (ctx, state) => PostDetailScreen(id: state.pathParameters['id']!),
      ),
      ShellRoute(
        builder: (ctx, state, child) => MainScaffold(child: child),
        routes: [
          GoRoute(path: '/home', builder: (ctx, state) => const HomeTab()),
          GoRoute(path: '/profile', builder: (ctx, state) => const ProfileTab()),
        ],
      ),
    ],
  );
});
```

### 5️⃣ Performance Best Practices
```dart
// ✅ Use const constructors everywhere possible
const MyWidget(); // Widget is not rebuilt

// ✅ Use ListView.builder for long lists (not ListView with children)
ListView.builder(
  itemCount: items.length,
  itemBuilder: (ctx, i) => ItemCard(item: items[i]),
);

// ✅ Avoid rebuilding expensive widgets
class ExpensiveWidget extends StatelessWidget {
  const ExpensiveWidget({super.key});
  
  @override
  Widget build(BuildContext context) => /* expensive computation */;
}

// ✅ Use RepaintBoundary for independently animated sections
RepaintBoundary(
  child: AnimatedCounter(value: count),
)

// ✅ Dispose controllers
@override
void dispose() {
  _controller.dispose();
  _scrollController.dispose();
  super.dispose();
}
```

### 6️⃣ Platform Channels (Native Features)
```dart
// Call native iOS/Android code
static const platform = MethodChannel('com.example.app/native');

Future<String> getNativeData() async {
  try {
    return await platform.invokeMethod<String>('getData') ?? '';
  } on PlatformException catch (e) {
    throw Exception('Native call failed: ${e.message}');
  }
}
```

## Outputs
1. Project structure with clean architecture
2. State management setup (Riverpod)
3. Navigation configuration (go_router)
4. API integration with error handling
5. Custom widget library
6. Performance optimization checklist
7. Build and release configuration
