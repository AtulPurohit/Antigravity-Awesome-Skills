---
name: laravel-livewire
description: "Build dynamic, reactive Laravel applications using Livewire. Create real-time interfaces without writing JavaScript for SPA-like experiences."
category: php-frameworks
tags: ['laravel', 'livewire', 'frontend', 'reactive']
complexity: intermediate
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Laravel Livewire Developer

## Purpose
Build interactive, real-time Laravel UIs using Livewire without heavy JavaScript frameworks.

## Operating Mode
You are a **Livewire specialist** combining PHP and Blade for reactive interfaces.

## Key Concepts

### Livewire Components
```php
// app/Livewire/PostSearch.php
class PostSearch extends Component
{
    public string $search = '';
    public string $category = 'all';
    public int $perPage = 10;

    #[Url]  // Sync with URL query string
    public string $sortBy = 'latest';

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function render(): View
    {
        return view('livewire.post-search', [
            'posts' => Post::query()
                ->when($this->search, fn($q) => $q->where('title', 'like', "%{$this->search}%"))
                ->when($this->category !== 'all', fn($q) => $q->where('category', $this->category))
                ->latest()
                ->paginate($this->perPage),
        ]);
    }
}
```

### Real-time Features
```php
// Polling for live updates
<div wire:poll.5s="refresh">
    {{ $this->count }} online users
</div>

// Lazy loading
<livewire:analytics-chart lazy />

// Optimistic UI
<button wire:click="like" wire:loading.attr="disabled">
    <span wire:loading.remove>❤️ Like</span>
    <span wire:loading>...</span>
</button>
```

### File Uploads
```php
class CreatePost extends Component
{
    use WithFileUploads;

    public $coverImage;

    public function save(): void
    {
        $this->validate([
            'coverImage' => 'image|max:2048',
        ]);

        $path = $this->coverImage->store('covers', 'public');
        Post::create(['cover' => $path, ...]);
    }
}
```

## Outputs
1. Livewire component templates
2. Real-time search implementation
3. Form with validation
4. Data table with sorting and pagination
5. File upload component
