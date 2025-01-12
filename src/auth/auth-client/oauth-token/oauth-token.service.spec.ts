import { Test, TestingModule } from '@nestjs/testing';
import { OauthTokenService } from './oauth-token.service';

describe('OauthTokenService', () => {
  let service: OauthTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthTokenService],
    }).compile();

    service = module.get<OauthTokenService>(OauthTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
