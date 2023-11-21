import supabase from "../supabase";

export const insertKeys = async (openAIkey, huggingFaceKey) => {
  const { data, error } = await supabase
    .from("settings")
    .insert([{ openai_key: openAIkey, huggingface_key: huggingFaceKey }])
    .select();

  return data;
};

export const insertUser = async (user) => {
    const { data, error } = await supabase
      .from("settings")
      .insert([{ user: user }])
      .select();
  
    return data;
  };
