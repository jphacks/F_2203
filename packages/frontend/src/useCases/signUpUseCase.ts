import { createHasuraClient, HasuraClient } from "@/lib/hasuraClient";

export default class SignUpUseCase {
  hasuraClient: HasuraClient
  constructor() {
    this.hasuraClient = createHasuraClient(null)
  }

  /** ユーザー情報登録 */
  async createUser(uid: string, name: string, nameId: string, bio: string) {
    await this.hasuraClient.CreateUser({
      uid: uid,
      name: name,
      custom_id: nameId,
      bio: bio,
    })
  }
}
