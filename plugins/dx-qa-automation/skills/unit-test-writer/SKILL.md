---
name: unit-test-writer
description: "Write comprehensive unit tests that verify behavior, catch regressions, and document intent. Covers test organization, assertions, mocking, and coverage."
category: testing
tags: [unit-tests, jest, pytest, mocha, testing]
complexity: intermediate
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Unit Test Writer

## Purpose
Write unit tests that catch bugs early, document intended behavior, and give confidence to refactor.

## Test Philosophy
- Test **behavior**, not implementation
- Each test should be: Fast, Independent, Repeatable, Self-validating
- Test the public interface, not internals
- One concept per test

## Test Examples

### JavaScript/TypeScript with Jest
```typescript
describe('UserService', () => {
  let service: UserService;
  let mockRepo: jest.Mocked<UserRepository>;
  let mockEmail: jest.Mocked<EmailService>;

  beforeEach(() => {
    mockRepo = {
      findByEmail: jest.fn(),
      create: jest.fn(),
    } as any;
    mockEmail = { sendWelcome: jest.fn() } as any;
    service = new UserService(mockRepo, mockEmail);
  });

  describe('register', () => {
    it('creates a user with hashed password', async () => {
      mockRepo.findByEmail.mockResolvedValue(null);
      mockRepo.create.mockResolvedValue({ id: '1', email: 'test@example.com' });

      await service.register({ email: 'test@example.com', password: 'Secret123!' });

      expect(mockRepo.create).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'test@example.com',
          password: expect.not.stringContaining('Secret123!'),  // Password hashed
        })
      );
    });

    it('sends welcome email after registration', async () => {
      mockRepo.findByEmail.mockResolvedValue(null);
      mockRepo.create.mockResolvedValue({ id: '1', email: 'test@example.com' });

      await service.register({ email: 'test@example.com', password: 'Secret123!' });

      expect(mockEmail.sendWelcome).toHaveBeenCalledWith('test@example.com');
    });

    it('throws ConflictError if email already exists', async () => {
      mockRepo.findByEmail.mockResolvedValue({ id: '1', email: 'test@example.com' });

      await expect(
        service.register({ email: 'test@example.com', password: 'Secret123!' })
      ).rejects.toThrow(ConflictError);

      expect(mockRepo.create).not.toHaveBeenCalled();
    });
  });
});
```

### Python with pytest
```python
import pytest
from unittest.mock import Mock, patch

@pytest.fixture
def user_service():
    mock_repo = Mock()
    mock_email = Mock()
    return UserService(mock_repo, mock_email), mock_repo, mock_email

class TestUserService:
    def test_register_creates_user(self, user_service):
        service, mock_repo, _ = user_service
        mock_repo.find_by_email.return_value = None
        mock_repo.create.return_value = User(id="1", email="test@example.com")

        service.register(email="test@example.com", password="Secret123!")

        mock_repo.create.assert_called_once()
        created_user = mock_repo.create.call_args[0][0]
        assert created_user.password != "Secret123!"  # Hashed

    def test_register_raises_if_email_taken(self, user_service):
        service, mock_repo, _ = user_service
        mock_repo.find_by_email.return_value = User(id="1", email="test@example.com")

        with pytest.raises(ConflictError):
            service.register(email="test@example.com", password="Secret123!")
```

## Test Organization
```
tests/
├── unit/
│   ├── services/
│   ├── models/
│   └── utils/
├── integration/
│   └── api/
└── e2e/
```

## Outputs
1. Test suite for specified modules
2. Test helpers and factories
3. Mock configuration
4. Coverage configuration
5. CI integration for test runs
