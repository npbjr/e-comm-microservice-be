import { Test, TestingModule } from '@nestjs/testing';
import { OauthTokenController } from './oauth-token.controller';

describe('OauthTokenController', () => {
  let controller: OauthTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OauthTokenController],
    }).compile();

    controller = module.get<OauthTokenController>(OauthTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
